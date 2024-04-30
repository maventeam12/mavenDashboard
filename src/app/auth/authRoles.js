const authRoles = {
  admin: ['admin'],
  employee: ['admin', 'employee'],
  client: ['admin', 'employee', 'client'],
  guest: [],
};

export default authRoles;
