import { i18n } from 'src/i18n';
import schemas from 'src/modules/shared/yup/yupImporterSchemas';

export default [
  {
    name: 'fullName',
    label: i18n('dashboard.fields.fullName'),
    schema: schemas.string(
      i18n('dashboard.fields.fullName'),
    ),
  },
  {
    name: 'industry',
    label: i18n('dashboard.fields.industry'),
    schema: schemas.string(
      i18n('dashboard.fields.industry'),
    ),
  },
  {
    name: 'jobTitle',
    label: i18n('dashboard.fields.jobTitle'),
    schema: schemas.string(
      i18n('dashboard.fields.jobTitle'),
    ),
  },
  {
    name: 'subRole',
    label: i18n('dashboard.fields.subRole'),
    schema: schemas.string(
      i18n('dashboard.fields.subRole'),
    ),
  },
  {
    name: 'industry2',
    label: i18n('dashboard.fields.industry2'),
    schema: schemas.string(
      i18n('dashboard.fields.industry2'),
    ),
  },
  {
    name: 'emails',
    label: i18n('dashboard.fields.emails'),
    schema: schemas.string(i18n('dashboard.fields.emails')),
  },
  {
    name: 'mobile',
    label: i18n('dashboard.fields.mobile'),
    schema: schemas.string(i18n('dashboard.fields.mobile')),
  },
  {
    name: 'phoneNumbers',
    label: i18n('dashboard.fields.phoneNumbers'),
    schema: schemas.string(
      i18n('dashboard.fields.phoneNumbers'),
    ),
  },
  {
    name: 'companyName',
    label: i18n('dashboard.fields.companyName'),
    schema: schemas.string(
      i18n('dashboard.fields.companyName'),
    ),
  },
  {
    name: 'companyIndustry',
    label: i18n('dashboard.fields.companyIndustry'),
    schema: schemas.string(
      i18n('dashboard.fields.companyIndustry'),
    ),
  },
  {
    name: 'companyWebsite',
    label: i18n('dashboard.fields.companyWebsote'),
    schema: schemas.string(
      i18n('dashboard.fields.companyWebsite'),
    ),
  },
  {
    name: 'companySize',
    label: i18n('dashboard.fields.companySize'),
    schema: schemas.string(
      i18n('dashboard.fields.companySize'),
    ),
  },
  {
    name: 'companyFounded',
    label: i18n('dashboard.fields.companyFounded'),
    schema: schemas.string(
      i18n('dashboard.fields.companyFounded'),
    ),
  },
  {
    name: 'location',
    label: i18n('dashboard.fields.location'),
    schema: schemas.string(
      i18n('dashboard.fields.location'),
    ),
  },
  {
    name: 'locality',
    label: i18n('dashboard.fields.locality'),
    schema: schemas.string(
      i18n('dashboard.fields.locality'),
    ),
  },
  {
    name: 'metro',
    label: i18n('dashboard.fields.metro'),
    schema: schemas.string(i18n('dashboard.fields.metro')),
  },
  {
    name: 'region',
    label: i18n('dashboard.fields.region'),
    schema: schemas.string(i18n('dashboard.fields.region')),
  },
  {
    name: 'skills',
    label: i18n('dashboard.fields.skills'),
    schema: schemas.string(i18n('dashboard.fields.skills')),
  },
  {
    name: 'firstName',
    label: i18n('dashboard.fields.firstName'),
    schema: schemas.string(
      i18n('dashboard.fields.firstName'),
    ),
  },
  {
    name: 'middleInitial',
    label: i18n('dashboard.fields.middleInitial'),
    schema: schemas.string(
      i18n('dashboard.fields.middleInitial'),
    ),
  },
  {
    name: 'middleName',
    label: i18n('dashboard.fields.middleName'),
    schema: schemas.string(
      i18n('dashboard.fields.middleName'),
    ),
  },
  {
    name: 'lastName',
    label: i18n('dashboard.fields.lastName'),
    schema: schemas.string(
      i18n('dashboard.fields.lastName'),
    ),
  },
  {
    name: 'birthYear',
    label: i18n('dashboard.fields.birthYear'),
    schema: schemas.string(
      i18n('dashboard.fields.birthYear'),
    ),
  },
  {
    name: 'birthDate',
    label: i18n('dashboard.fields.birthDate'),
    schema: schemas.string(
      i18n('dashboard.fields.birthDate'),
    ),
  },
  {
    name: 'gender',
    label: i18n('dashboard.fields.gender'),
    schema: schemas.string(i18n('dashboard.fields.gender')),
  },
  {
    name: 'linkedinUrl',
    label: i18n('dashboard.fields.linkedinUrl'),
    schema: schemas.string(
      i18n('dashboard.fields.linkedinUrl'),
    ),
  },
  {
    name: 'linkedinUsername',
    label: i18n('dashboard.fields.linkedinUsername'),
    schema: schemas.string(
      i18n('dashboard.fields.linkedinUsername'),
    ),
  },
  {
    name: 'facebookUrl',
    label: i18n('dashboard.fields.facebookUrl'),
    schema: schemas.string(
      i18n('dashboard.fields.facebookUrl'),
    ),
  },
  {
    name: 'facebookUsername',
    label: i18n('dashboard.fields.facebookUsername'),
    schema: schemas.string(
      i18n('dashboard.fields.facebookUsername'),
    ),
  },
  {
    name: 'twitterUrl',
    label: i18n('dashboard.fields.twitterUrl'),
    schema: schemas.string(
      i18n('dashboard.fields.twitterUrl'),
    ),
  },
  {
    name: 'twitterUsername',
    label: i18n('dashboard.fields.twitterUsername'),
    schema: schemas.string(
      i18n('dashboard.fields.twitterUsername'),
    ),
  },
  {
    name: 'githubUrl',
    label: i18n('dashboard.fields.githubUrl'),
    schema: schemas.string(
      i18n('dashboard.fields.githubUrl'),
    ),
  },
  {
    name: 'githubUsername',
    label: i18n('dashboard.fields.githubUsername'),
    schema: schemas.string(
      i18n('dashboard.fields.githubUsername'),
    ),
  },
  {
    name: 'companyLinkedinUrl',
    label: i18n('dashboard.fields.companyLinkedinUrl'),
    schema: schemas.string(
      i18n('dashboard.fields.companyLinkedinUrl'),
    ),
  },
  {
    name: 'companyFacebookUrl',
    label: i18n('dashboard.fields.companyFacebookUrl'),
    schema: schemas.string(
      i18n('dashboard.fields.companyFacebookUrl'),
    ),
  },
  {
    name: 'companyTwitterUrl',
    label: i18n('dashboard.fields.companyTwitterUrl'),
    schema: schemas.string(
      i18n('dashboard.fields.companyTwitterUrl'),
    ),
  },
  {
    name: 'companyLocationName',
    label: i18n('dashboard.fields.companyLocationName'),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationName'),
    ),
  },
  {
    name: 'companyLocationLocality',
    label: i18n('dashboard.fields.companyLocationLocality'),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationLocality'),
    ),
  },
  {
    name: 'companyLocationMetro',
    label: i18n('dashboard.fields.companyLocationMetro'),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationMetro'),
    ),
  },
  {
    name: 'companyLocationRegion',
    label: i18n('dashboard.fields.companyLocationRegion'),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationRegion'),
    ),
  },
  {
    name: 'companyLocationGeo',
    label: i18n('dashboard.fields.companyLocationGeo'),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationGeo'),
    ),
  },
  {
    name: 'companyLocationStreetAddress',
    label: i18n(
      'dashboard.fields.companyLocationStreetAddress',
    ),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationStreetAddress'),
    ),
  },
  {
    name: 'companyLocationStreetAddressLine2',
    label: i18n(
      'dashboard.fields.companyLocationStreetAddressLine2',
    ),
    schema: schemas.string(
      i18n(
        'dashboard.fields.companyLocationStreetAddressLine2',
      ),
    ),
  },
  {
    name: 'companyLocationPostalCode',
    label: i18n(
      'dashboard.fields.companyLocationPostalCode',
    ),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationPostalCode'),
    ),
  },
  {
    name: 'companyLocationCountry',
    label: i18n('dashboard.fields.companyLocationCountry'),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationCountry'),
    ),
  },
  {
    name: 'companyLocationContinent',
    label: i18n(
      'dashboard.fields.companyLocationContinent',
    ),
    schema: schemas.string(
      i18n('dashboard.fields.companyLocationContinent'),
    ),
  },
  {
    name: 'startDate',
    label: i18n('dashboard.fields.startDate'),
    schema: schemas.string(
      i18n('dashboard.fields.startDate'),
    ),
  },
  {
    name: 'jobSummary',
    label: i18n('dashboard.fields.jobSummary'),
    schema: schemas.string(
      i18n('dashboard.fields.jobSummary'),
    ),
  },
  {
    name: 'locationCountry',
    label: i18n('dashboard.fields.locationCountry'),
    schema: schemas.string(
      i18n('dashboard.fields.locationCountry'),
    ),
  },
  {
    name: 'locationContinent',
    label: i18n('dashboard.fields.locationContinent'),
    schema: schemas.string(
      i18n('dashboard.fields.locationContinent'),
    ),
  },
  {
    name: 'streetAddress',
    label: i18n('dashboard.fields.streetAddress'),
    schema: schemas.string(
      i18n('dashboard.fields.streetAddress'),
    ),
  },
  {
    name: 'addressLine2',
    label: i18n('dashboard.fields.addressLine2'),
    schema: schemas.string(
      i18n('dashboard.fields.addressLine2'),
    ),
  },
  {
    name: 'postalCode',
    label: i18n('dashboard.fields.postalCode'),
    schema: schemas.string(
      i18n('dashboard.fields.postalCode'),
    ),
  },
  {
    name: 'locationGeo',
    label: i18n('dashboard.fields.locationGeo'),
    schema: schemas.string(
      i18n('dashboard.fields.locationGeo'),
    ),
  },
  {
    name: 'lastUpdated',
    label: i18n('dashboard.fields.lastUpdated'),
    schema: schemas.string(
      i18n('dashboard.fields.lastUpdated'),
    ),
  },
  {
    name: 'linkedinConnections',
    label: i18n('dashboard.fields.linkedinConnections'),
    schema: schemas.string(
      i18n('dashboard.fields.linkedinConnections'),
    ),
  },
  {
    name: 'inferredSalary',
    label: i18n('dashboard.fields.inferredSalary'),
    schema: schemas.string(
      i18n('dashboard.fields.inferredSalary'),
    ),
  },
  {
    name: 'yearsExperience',
    label: i18n('dashboard.fields.yearsExperience'),
    schema: schemas.string(
      i18n('dashboard.fields.yearsExperience'),
    ),
  },
  {
    name: 'summary',
    label: i18n('dashboard.fields.summary'),
    schema: schemas.string(
      i18n('dashboard.fields.summary'),
    ),
  },
  {
    name: 'countries',
    label: i18n('dashboard.fields.countries'),
    schema: schemas.string(
      i18n('dashboard.fields.countries'),
    ),
  },
  {
    name: 'interests',
    label: i18n('dashboard.fields.interests'),
    schema: schemas.string(
      i18n('dashboard.fields.interests'),
    ),
  },
];
