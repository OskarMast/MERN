import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('companies');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CompanySchema = new Schema(
    {
      fullName: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      industry: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      jobTitle: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      subRole: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      industry2: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      emails: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      mobile: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      phoneNumbers: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyName: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyIndustry: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyWebsite: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companySize: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyFounded: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      location: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      locality: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      metro: { type: String, minlength: 1, maxlength: 100 },
      region: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      skills: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      firstName: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      middleInitial: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      middleName: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      lastName: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      birthYear: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      birthDate: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      gender: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      linkedinUrl: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      linkedinUser: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      facebookUrl: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      facebookUser: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      twitterUrl: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      twitterUser: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      githubUrl: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      githubUser: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLinkedinUrl: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyFacebookUrl: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyTwitterUrl: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationName: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationLocality: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationMetro: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationRegion: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationGeo: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationStreetAddress: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationStreetAddressLine2: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationPostalCode: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationCountry: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      companyLocationContinent: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      lastUpdated: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      startDate: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      jobSummary: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      locationCountry: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      locationContinent: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      streetAddress: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      addressLine2: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      postalCode: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      locationGeo: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      linkedinConnections: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      inferredSalary: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      yearsExperience: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      summary: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      countries: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      interests: {
        type: String,
        minlength: 1,
        maxlength: 100,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String, maxlength: 255 },
    },
    {
      timestamps: true,
    },
  );

  CompanySchema.index(
    { importHash: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  CompanySchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CompanySchema.set('toJSON', {
    getters: true,
  });

  CompanySchema.set('toObject', {
    getters: true,
  });

  return database.model('company', CompanySchema);
};
