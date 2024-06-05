import Plans from 'src/security/plans';

const plans = Plans.values;

export default class PermissionChecker {
  currentTenant;
  currentUser;

  constructor(currentTenant, currentUser) {
    this.currentTenant = currentTenant;
    this.currentUser = currentUser;
  }

  get currentUserRolesIds() {
    if (!this.currentUser || !this.currentUser.roles) {
      return [];
    }

    const currentUser_role = this.currentUser.roles;

    if (!currentUser_role) {
      return [];
    }

    return currentUser_role;
  }

  get isAdmin() {
    if (!this.currentUser || !this.currentUser.roles) {
      return [];
    }

    const currentUser = this.currentUser.roles;

    if (!currentUser) {
      return [];
    }

    return Boolean(currentUser.roles === 'admin');
  }

  match(permission) {
    if (!permission) {
      return true;
    }

    if (!this.planMatchOneOf(permission.allowedPlans)) {
      return false;
    }

    return this.rolesMatchOneOf(permission.allowedRoles);
  }

  lockedForCurrentPlan(permission) {
    if (!permission) {
      return false;
    }

    if (!this.rolesMatchOneOf(permission.allowedRoles)) {
      return false;
    }

    return !this.planMatchOneOf(permission.allowedPlans);
  }

  rolesMatchOneOf(arg) {
    if (!this.currentUserRolesIds) {
      return false;
    }

    if (!arg) {
      return false;
    }

    if (Array.isArray(arg)) {
      if (!arg.length) {
        return false;
      }

      return arg.some(
        (role) => this.currentUserRolesIds == role,
      );
    }

    return this.currentUserRolesIds.includes(arg);
  }

  planMatchOneOf(arg) {
    if (!this.currentTenantPlan) {
      return false;
    }

    if (!arg) {
      return false;
    }

    if (Array.isArray(arg)) {
      if (!arg.length) {
        return false;
      }

      return arg.some(
        (plan) => plan === this.currentTenantPlan,
      );
    }

    return arg === this.currentTenantPlan;
  }

  get currentTenantPlan() {
    if (!this.currentTenant) {
      return plans.free;
    }

    if (!this.currentTenant.plan) {
      return plans.free;
    }

    return this.currentTenant.plan;
  }

  get isEmptyTenant() {
    if (!this.isAuthenticated) {
      return true;
    }

    //return !this.currentUser.tenants.some(
    //  (tenant) => tenant.status === 'active',
    //);
  }

  get isEmptyPermissions() {
    if (!this.isAuthenticated) {
      return true;
    }

    if (!this.currentUser.roles) {
      return true;
    }

    const tenant = this.currentUser.roles == 'admin';

    if (!tenant) {
      return true;
    }

    return !tenant;
  }

  get isAuthenticated() {
    return (
      Boolean(this.currentUser) &&
      Boolean(this.currentUser.id)
    );
  }

  get isEmailVerified() {
    if (!this.isAuthenticated) {
      return false;
    }

    return this.currentUser.emailVerified;
  }
}
