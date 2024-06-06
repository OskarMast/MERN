import Roles from 'src/security/roles';

const userEnumerators = {
  roles: Object.keys(Roles.values),
};

export default userEnumerators;
