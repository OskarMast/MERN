export default (app) => {
  // app.post(
  //   `/tenant/:tenantId/dashboard`,
  //   require('./dashboardCreate').default,
  // );
  // app.put(
  //   `/tenant/:tenantId/dashboard`,
  //   require('./dashboardEdit').default,
  // );
  app.post(
    `/tenant/:tenantId/dashboard/import`,
    require('./dashboardImport').default,
  );
  // app.delete(
  //   `/tenant/:tenantId/dashboard`,
  //   require('./dashboardDestroy').default,
  // );
  // app.get(
  //   `/tenant/:tenantId/dashboard`,
  //   require('./dashboardList').default,
  // );
  // app.get(
  //   `/tenant/:tenantId/dashboard/autocomplete`,
  //   require('./dashboardAutocomplete').default,
  // );
  // app.get(
  //   `/tenant/:tenantId/dashboard/:id`,
  //   require('./dashboardFind').default,
  // );
};
