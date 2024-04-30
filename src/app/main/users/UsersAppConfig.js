import { lazy } from 'react';



const LoginRegister = lazy(() => import('./loginHours/LoginHours'));
const User = lazy(() => import('./companyuser/CompanyUser'));
const Clients = lazy(() => import('./clients/clients'));
const Client = lazy(() => import('./client/Client'));
const Team = lazy(() => import('./companyUsers/CompanyUsers'));
const usersAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'users/team',
      element: <Team />,
      auth: ['admin'],
    },
    {
      path: 'users/team/:companyUserId',
      element: <User />,
      auth: ['admin'],
    },
    {
      path: 'users/clients',
      element: <Clients />,
      auth: ['admin','employee'],
    },
    {
      path: 'users/clients/:clientId',
      element: <Client />,
      auth: ['admin','employee'],
    },
    {
      path: 'users/loginHours',
      element: <LoginRegister />,
      auth: ['admin'],
    },
  ],
};

export default usersAppConfig;
