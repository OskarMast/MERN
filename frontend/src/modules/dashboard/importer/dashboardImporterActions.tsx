import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dashboard/importer/dashboardImporterSelectors';
import DashboardService from 'src/modules/dashboard/dashboardService';
import fields from 'src/modules/dashboard/importer/dashboardImporterFields';
import { i18n } from 'src/i18n';

const dashboardImporterActions = importerActions(
  'DASHBOARD_IMPORTER',
  selectors,
  DashboardService.import,
  fields,
  i18n('dashboard.importer.fileName'),
);

export default dashboardImporterActions;
