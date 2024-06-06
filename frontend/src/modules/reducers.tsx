import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import auth from 'src/modules/auth/authReducers';
import form from 'src/modules/form/formReducers';
import layout from 'src/modules/layout/layoutReducers';
import mui from 'src/modules/mui/muiReducers';
import plan from 'src/modules/plan/planReducers';
import settings from 'src/modules/settings/settingsReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import dashboard from 'src/modules/dashboard/dashboardReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    form,
    mui,
    layout,
    auth,
    tenant,
    plan,
    auditLog,
    settings,
    user,
    dashboard,
  });
