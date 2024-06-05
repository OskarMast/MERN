export default (app) => {
  app.post(
    `/tenant/:tenantId/grade`,
    require('./gradeCreate').default,
  );
  app.put(
    `/tenant/:tenantId/grade/:id`,
    require('./gradeUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/grade/import`,
    require('./gradeImport').default,
  );
  app.delete(
    `/tenant/:tenantId/grade`,
    require('./gradeDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/grade/autocomplete`,
    require('./gradeAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/grade`,
    require('./gradeList').default,
  );
  app.get(
    `/tenant/:tenantId/grade/:id`,
    require('./gradeFind').default,
  );
};
