import 'core-js/actual/array/group-by';
import { IRepositoryOptions } from './IRepositoryOptions';
import Error404 from '../../errors/Error404';
import Lead from '../models/lead';
import lodash from 'lodash';
import MongooseQueryUtils from '../utils/mongooseQueryUtils';
import MongooseRepository from './mongooseRepository';

export default class LeadRepository {
  static async create(data, options: IRepositoryOptions) {
    const currentUser =
      MongooseRepository.getCurrentUser(options);
    const [record] = await Lead(options.database).create(
      [
        {
          fullName: data.fullName || null,
          industry: data.industry || null,
          jobTitle: data.jobTitle || null,
          subRole: data.subRole || null,
          industry2: data.industry2 || null,
          emails: data.emails || null,
          mobile: data.mobile || null,
          phoneNumbers: data.phoneNumbers || null,
          companyName: data.companyName || null,
          companyIndustry: data.companyIndustry || null,
          companyWebsite: data.companyWebsite || null,
          companySize: data.companySize || null,
          companyFounded: data.companyFounded || null,
          location: data.location || null,
          locality: data.locality || null,
          metro: data.metro || null,
          region: data.region || null,
          skills: data.skills || null,
          firstName: data.firstName || null,
          middleInitial: data.middleInitial || null,
          middleName: data.middleName || null,
          lastName: data.lastName || null,
          birthYear: data.birthYear || null,
          birthDate: data.birthDate || null,
          gender: data.gender || null,
          linkedinUrl: data.linkedinUrl || null,
          linkedinUser: data.linkedinUser || null,
          facebookUrl: data.facebookUrl || null,
          facebookUser: data.facebookUser || null,
          twitterUrl: data.twitterUrl || null,
          twitterUser: data.twitterUser || null,
          githubUrl: data.githubUrl || null,
          githubUser: data.githubUser || null,
          companyLinkedinUrl:
            data.companyLinkedinUrl || null,
          companyFacebookUrl:
            data.companyFacebookUrl || null,
          companyTwitterUrl: data.companyTwitterUrl || null,
          companyLocationName:
            data.companyLocationName || null,
          companyLocationLocality:
            data.companyLocationLocality || null,
          companyLocationMetro:
            data.companyLocationMetro || null,
          companyLocationRegion:
            data.companyLocationRegion || null,
          companyLocationGeo:
            data.companyLocationGeo || null,
          companyLocationStreetAddress:
            data.companyLocationStreetAddress || null,
          companyLocationStreetAddressLine2:
            data.companyLocationStreetAddressLine2 || null,
          companyLocationPostalCode:
            data.companyLocationPostalCode || null,
          companyLocationCountry:
            data.companyLocationCountry || null,
          companyLocationContinent:
            data.companyLocationContinent || null,
          lastUpdated: data.lastUpdated || null,
          startDate: data.startDate || null,
          jobSummary: data.jobSummary || null,
          locationCountry: data.locationCountry || null,
          locationContinent: data.locationContinent || null,
          streetAddress: data.streetAddress || null,
          addressLine2: data.addressLine2 || null,
          postalCode: data.postalCode || null,
          locationGeo: data.locationGeo || null,
          linkedinConnections:
            data.linkedinConnections || null,
          inferredSalary: data.inferredSalary || null,
          yearsExperience: data.yearsExperience || null,
          summary: data.summary || null,
          countries: data.countries || null,
          interests: data.interests || null,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        },
      ],
      options,
    );

    return this.findById(record.id, options);
  }

  static async update(
    id,
    data,
    options: IRepositoryOptions,
  ) {
    let record =
      await MongooseRepository.wrapWithSessionIfExists(
        Lead(options.database).findOne({
          _id: id,
        }),
        options,
      );

    if (!record) {
      throw new Error404();
    }

    await Lead(options.database).updateOne(
      { _id: id },
      {
        ...data,
        updatedBy:
          MongooseRepository.getCurrentUser(options).id,
      },
      options,
    );

    record = await this.findById(id, options);

    return record;
  }

  static async destroy(id, options: IRepositoryOptions) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    let record =
      await MongooseRepository.wrapWithSessionIfExists(
        Lead(options.database).findOne({
          _id: id,
          tenant: currentTenant.id,
        }),
        options,
      );

    if (!record) {
      throw new Error404();
    }

    await Lead(options.database).deleteOne(
      { _id: id },
      options,
    );
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);
    let criteriaAnd: any = [];

    if (filter) {
      if (filter.id) {
        criteriaAnd.push({
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        });
      }

      if (filter.companyLinkedinUrl) {
        criteriaAnd.push({
          ['companyLinkedinUrl']: filter.companyLinkedinUrl,
        });
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;
    const criteria = criteriaAnd.length
      ? { $and: criteriaAnd }
      : null;

    let rows =
      await MongooseRepository.wrapWithSessionIfExists(
        Lead(options.database)
          .find(criteria)
          .skip(skip)
          .limit(limitEscaped)
          .sort(sort)
          .populate('avatars'),
        options,
      );

    const count =
      await MongooseRepository.wrapWithSessionIfExists(
        Lead(options.database).countDocuments(criteria),
        options,
      );

    return { rows, count };
  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return ids;
    }

    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    let leads = await Lead(options.database)
      .find({
        _id: {
          $in: ids,
        },
        tenants: {
          $elemMatch: { tenant: currentTenant.id },
        },
      })
      .select(['_id']);

    return leads.map((lead) => lead._id);
  }

  static async findById(
    id,
    options: IRepositoryOptions,
    metaOnly = false,
  ) {
    let record =
      await MongooseRepository.wrapWithSessionIfExists(
        Lead(options.database)
          .findOne({ _id: id })
          .populate({
            path: 'createdBy',
          }),
        options,
      );

    if (!record) {
      throw new Error404();
    }

    return record;
  }
  static async count(filter, options: IRepositoryOptions) {
    return MongooseRepository.wrapWithSessionIfExists(
      Lead(options.database).countDocuments(filter),
      options,
    );
  }
}
