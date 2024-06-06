import { i18n } from 'src/i18n';
import { Icon } from '@mui/material';
import config from 'src/config';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

const menus = [
  {
    path: '/admin/dashboard',
    exact: true,
    icon: <Icon fontSize="medium">dashboard</Icon>,
    name: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  {
    path: '/admin/user',
    name: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <Icon fontSize="medium">person</Icon>,
  },
].filter(Boolean);

const profileRoutes = [
  {
    name: i18n('auth.profile.title'),
    path: '/admin/profile',
    icon: <Icon>person_outline</Icon>,
  },
  {
    name: i18n('auth.passwordChange.title'),
    path: '/admin/password-change',
    icon: <Icon>lock</Icon>,
  },
].filter(Boolean);

const tenantRoutes = [
  {
    name: i18n('tenant.list.title'),
    path: '/admin/tenant',
    icon: <Icon>apps</Icon>,
  },
].filter(Boolean);

const userRoutes = [].filter(Boolean);

export {
  menus,
  profileRoutes,
  tenantRoutes,
  userRoutes,
};
