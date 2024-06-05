import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/admin',
    i18n: 'dashboard.menu',
    parent: '/',
    redirect: '/admin/dashboard',
    permissionRequired: null,
    skipBreadcrumb: true,
    exact: true,
  },

  {
    path: '/admin/dashboard',
    i18n: 'dashboard.menu',
    parent: '/admin',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/admin/report',
    collapseName: 'reports',
    i18n: 'collapses.reports.menu',
    parent: '/admin',
    redirect: '/admin/report/tasks-by-month',
    permissionRequired: null,
    virtual: true,
  },

  {
    path: '/admin/person-name-breadcrumb',
    collapseName: 'my-profile',
    // labelCode: '{USER_TEXT}',
    i18n: 'roles.admin.label',
    parent: '/admin',
    redirect: '/admin/profile',
    permissionRequired: null,
    virtual: true,
  },

  {
    path: '/admin/profile',
    collapseName: 'my-profile',
    i18n: 'auth.profile.title',
    parent: '/admin/person-name-breadcrumb',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/admin/password-change',
    collapseName: 'my-profile',
    i18n: 'auth.passwordChange.title',
    parent: '/admin/person-name-breadcrumb',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/admin/tenant',
    collapseName: 'my-profile',
    i18n: 'tenant.list.title',
    parent: '/admin/person-name-breadcrumb',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/admin/tenant/new',
    collapseName: 'my-profile',
    i18n: 'tenant.new.title',
    parent: '/admin/tenant',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/admin/tenant/:id/edit',
    collapseName: 'my-profile',
    i18n: 'tenant.edit.title',
    parent: '/admin/tenant',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/admin/plan',
    i18n: 'plan.title',
    collapseName: 'my-profile',
    parent: '/admin/person-name-breadcrumb',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/admin/user',
    i18n: 'user.menu',
    parent: '/admin',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/admin/user/new',
    i18n: 'user.new.title',
    parent: '/admin/user',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/admin/user/importer',
    i18n: 'user.importer.title',
    parent: '/admin/user',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },

  {
    path: '/admin/user/:id/edit',
    i18n: 'user.edit.title',
    parent: '/admin/user',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },

  {
    path: '/admin/user/:id',
    i18n: 'user.view.title',
    parent: '/admin/user',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/admin/settings-breadcrumb',
    collapseName: 'settings',
    i18n: 'settings.title',
    parent: '/admin',
    redirect: '/admin/settings',
    permissionRequired: null,
    virtual: true,
  },

  {
    path: '/admin/audit-logs',
    collapseName: 'settings',
    i18n: 'auditLog.menu',
    parent: '/admin/settings-breadcrumb',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/admin/settings',
    collapseName: 'settings',
    i18n: 'settings.tenant',
    parent: '/admin/settings-breadcrumb',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/',
    loader: () => import('src/view/home/HomeViewPage'),
    exact: true,
  },
  {
    path: '/admin/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
    exact: true,
  },
  {
    path: '/admin/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
    exact: true,
  },
  {
    path: '/admin/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
    exact: true,
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/admin/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/admin/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/admin/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/admin/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/admin/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/admin/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/admin/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/admin/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

const frontEndRoutes = [].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
  frontEndRoutes,
};

export function findRoute(url = null, routes = []) {
  return (
    !!url &&
    (routes.find((route) => url === route.path) ||
      routes.find(
        (route) =>
          /\/:[\w\d_-]+/g.test(route.path) &&
          new RegExp(
            `^${route.path.replace(
              /:[\w\d_-]+/g,
              '[\\w\\d]+',
            )}$`,
          ).test(url),
      ))
  );
}

export function matchedRoutes(
  url = null,
  exactOnly = false,
) {
  if (url === null || url === undefined) {
    return null;
  }

  let routes = [];

  const searchRouteStack = (url, exactOnly) => {
    const found = findRoute(url, privateRoutes);

    if (exactOnly === true) {
      return found;
    }

    if (found) {
      routes.push(found);
      if (found.parent && found.parent !== '/') {
        return searchRouteStack(found.parent, exactOnly);
      }
    }

    routes.reverse();

    return routes;
  };

  return searchRouteStack(url, exactOnly);
}
