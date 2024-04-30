import themesConfig from 'app/configs/themesConfig';
import i18n from '../../i18n';
import { authRoles } from '../auth';
const settingsConfig = {
  layout: {
    style: 'layout1', // layout1 layout2 layout3
    // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js
    config: {} 
  },
  customScrollbars: true,
  direction: i18n.dir(i18n.options.lng) || 'ltr', // rtl, ltr
  theme: {
    main: themesConfig.defaultDark2,
    navbar: themesConfig.defaultDark,
    toolbar: themesConfig.defaultDark,
    footer: themesConfig.defaultDark,
  },
  /*
   To make whole app auth protected by default set defaultAuth:['admin','staff','user']
   To make whole app accessible without authorization by default set defaultAuth: null
   *** The individual route configs which has auth option won't be overridden.
   */
  defaultAuth: authRoles.client,
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: '/Welcome',
};

export default settingsConfig;
