import TenantRepository from '../database/repositories/tenantRepository';
import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import PermissionChecker from './user/permissionChecker';
import Permissions from '../security/permissions';
import Error404 from '../errors/Error404';
import { getConfig } from '../config';
import Roles from '../security/roles';
import SettingsService from './settingsService';
import UserRepository from '../database/repositories/userRepository';
import Plans from '../security/plans';
import { IServiceOptions } from './IServiceOptions';

export default class TenantService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates the default tenant or joins the default with
   * roles passed.
   * If default roles are empty, the admin will have to asign the roles
   * to new users.
   */

  async joinWithDefaultRolesOrAskApproval(
    { roles, tenantId },
    { session },
  ) {
    const tenant = await TenantRepository.findById(
      tenantId,
      {
        ...this.options,
        session,
      },
    );

    if (!tenant) {
      return;
    }
  }

  // In case this user has been invited
  // but havent used the invitation token
  async joinDefaultUsingInvitedEmail(session) {
    const tenant = await TenantRepository.findDefault({
      ...this.options,
      session,
    });

    if (!tenant) {
      return;
    }
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      if (getConfig().TENANT_MODE === 'single') {
        const count = await TenantRepository.count(null, {
          ...this.options,
          session,
        });

        if (count > 0) {
          throw new Error400(
            this.options.language,
            'tenant.exists',
          );
        }
      }

      let record = await TenantRepository.create(data, {
        ...this.options,
        session,
      });

      await SettingsService.findOrCreateDefault({
        ...this.options,
        currentTenant: record,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      let record = await TenantRepository.findById(id, {
        ...this.options,
        session,
        currentTenant: { id },
      });

      new PermissionChecker({
        ...this.options,
        currentTenant: { id },
      }).validateHas(Permissions.values.tenantEdit);

      record = await TenantRepository.update(id, data, {
        ...this.options,
        session,
        currentTenant: record,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async updatePlanUser(
    id,
    planStripeCustomerId,
    planUserId,
  ) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      await TenantRepository.updatePlanUser(
        id,
        planStripeCustomerId,
        planUserId,
        {
          ...this.options,
          session,
          currentTenant: { id },
          bypassPermissionValidation: true,
        },
      );

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async updatePlanToFree(planStripeCustomerId) {
    return this.updatePlanStatus(
      planStripeCustomerId,
      Plans.values.free,
      'active',
    );
  }

  async updatePlanStatus(
    planStripeCustomerId,
    plan,
    planStatus,
  ) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      await TenantRepository.updatePlanStatus(
        planStripeCustomerId,
        plan,
        planStatus,
        {
          ...this.options,
          session,
          bypassPermissionValidation: true,
        },
      );

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        const tenant = await TenantRepository.findById(id, {
          ...this.options,
          session,
          currentTenant: { id },
        });

        new PermissionChecker({
          ...this.options,
          currentTenant: tenant,
        }).validateHas(Permissions.values.tenantDestroy);

        if (
          !Plans.allowTenantDestroy(
            tenant.plan,
            tenant.planStatus,
          )
        ) {
          throw new Error400(
            this.options.language,
            'tenant.planActive',
          );
        }

        await TenantRepository.destroy(id, {
          ...this.options,
          session,
          currentTenant: { id },
        });
      }

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async findById(id, options?) {
    options = options || {};

    return TenantRepository.findById(id, {
      ...this.options,
      ...options,
    });
  }

  async findByUrl(url, options?) {
    options = options || {};

    return TenantRepository.findByUrl(url, {
      ...this.options,
      ...options,
    });
  }

  async findAllAutocomplete(search, limit) {
    return TenantRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return TenantRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await TenantRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
