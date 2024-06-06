import Error400 from '../../errors/Error400';
import DashboardRepository from '../../database/repositories/companyRepository';
import DashboardCreator from '../dashboard/dashboardCreator';
import { IServiceOptions } from '../IServiceOptions';
import MongooseRepository from '../../database/repositories/mongooseRepository';
import CompanyRepository from '../../database/repositories/companyRepository';
import LeadRepository from '../../database/repositories/leadRepository';

/**
 * Flags if should send invitation emails for imported dashboards.
 */
const SEND_INVITATION_EMAIL = false;

export default class DashboardImporter {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    // try {
    //   data.reference =
    //     await ReferenceRepository.getNextReference(
    //       Product,
    //       this.options,
    //       true,
    //     );

    //   await this.assignRelatedData(data, session);

    //   const record = await ProductRepository.create(data, {
    //     ...this.options,
    //     session,
    //   });

    //   await TagRefRepository.save(
    //     Product,
    //     null,
    //     record.id,
    //     data.tags,
    //     {
    //       ...this.options,
    //       session,
    //     },
    //   );

    //   await MongooseRepository.commitTransaction(session);

    //   return record;
    // } catch (error) {
    //   await MongooseRepository.abortTransaction(session);

    //   MongooseRepository.handleUniqueFieldError(
    //     error,
    //     this.options.language,
    //     'product',
    //   );

    //   throw error;
    // }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    // try {
    //   await this.assignRelatedData(data, session);

    //   const record = await ProductRepository.update(
    //     id,
    //     data,
    //     {
    //       ...this.options,
    //       session,
    //     },
    //   );

    //   await TagRefRepository.save(
    //     Product,
    //     null,
    //     record.id,
    //     data.tags,
    //     {
    //       ...this.options,
    //       session,
    //     },
    //   );

    //   await MongooseRepository.commitTransaction(session);

    //   return record;
    // } catch (error) {
    //   await MongooseRepository.abortTransaction(session);

    //   MongooseRepository.handleUniqueFieldError(
    //     error,
    //     this.options.language,
    //     'product',
    //   );

    //   throw error;
    // }
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

    if (data.reference ?? false) {
      delete data.reference;
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count_lead = await LeadRepository.count(
      {
        importHash,
      },
      this.options,
    );
    const count_company = await CompanyRepository.count(
      {
        importHash,
      },
      this.options,
    );
    return count_lead > 0 && count_company > 0;
  }
}
