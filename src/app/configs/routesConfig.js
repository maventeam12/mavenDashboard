import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import Error404Config from '../main/404/Error404Config';
import WelcomeConfig from '../main/example/WelcomeConfig';
import clientContractAppConfig from '../main/clientContract/clientContractAppConfig'
import { authRoles } from '../auth';

import WebsiteConfigurationAppConfig from '../main/websiteConfigration/websiteConfigurationAppConfig';
import usersAppConfig from '../main/users/UsersAppConfig';
import contractAppConfig from '../main/contract/contractAppConfig';
const routeConfigs = [

  SignOutConfig,
  SignInConfig,
  Error404Config,
  WelcomeConfig,
  WebsiteConfigurationAppConfig,
  usersAppConfig,
  contractAppConfig,
  clientContractAppConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="Welcome" />,
    auth: authRoles.client,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
