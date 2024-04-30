import Error404Page from './Error404Page';
import authRoles from '../../auth/authRoles';

const SignInConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  //auth: authRoles.guest,
  routes: [
    {
      path: '404',
      element: <Error404Page />,
    },
  ],
};

export default SignInConfig;
