import importerReducer from 'src/modules/dashboard/importer/dashboardImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  importer: importerReducer,
});
