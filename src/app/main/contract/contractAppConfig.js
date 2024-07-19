import { lazy } from 'react';
const ClientMessages = lazy(() => import('./clientMessages/clientMessages'));
const ClientMessage = lazy(() => import('./clientMessage/ClientMessage'));
const Contracts = lazy(() => import('./contracts/Contracts'));
const Contract = lazy(() => import('./contract/Contract'));
const ContractExtraService = lazy(() => import('./clientExtraServices/clientMessages'));
const contractAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'contract/notifications',
      element: <ClientMessages />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'contract/notifications/:clientMessageId',
      element: <ClientMessage />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'contract/contracts',
      element: <Contracts />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'contract/contracts/:contractId',
      element: <Contract />,
      auth: ['admin', 'employee'],
    },
    {
      path: 'contract/contractExtraService',
      element: <ContractExtraService />,
      auth: ['admin', 'employee'],
    },

  ],
};

export default contractAppConfig;
