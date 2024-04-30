import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import ar from './i18n/ar';
import { authRoles } from 'src/app/auth';
i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('ar', 'examplePage', ar);
const Example = lazy(() => import('./Welcome'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth:  authRoles.client,
  routes: [
    {
      path: 'Welcome',
      element: <Example />,
      auth:  authRoles.client,
    },
  ],
};

export default ExampleConfig;
