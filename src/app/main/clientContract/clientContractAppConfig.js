import { lazy } from 'react';
const ClientMessages = lazy(() => import('./clientMessages/clientMessages'));
const Contracts = lazy(() => import('./contracts/Contracts'));
const Contract = lazy(() => import('./contract/Contract'));

const contractAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'clientContract/advertisements',
      element: <ClientMessages />,
      auth: ['client'],
    },
    {
      path: 'clientContract/contracts',
      element: <Contracts />,
      auth: ['client'],
    },
    {
      path: 'clientContract/contracts/:contractId',
      element: <Contract />,
      auth: ['client'],
    },

  ],
};

export default contractAppConfig;
