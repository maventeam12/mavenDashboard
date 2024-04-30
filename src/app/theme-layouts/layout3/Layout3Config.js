const config = {
  title: 'Layout 2 - Horizontal',
  defaults: {
    mode: 'container',
    containerWidth: 1570,
    scroll: 'content',
    navbar: {
      display: true,
      style: 'fixed',
    },
    toolbar: {
      display: true,
      style: 'static',
      position: 'below',
    },
    footer: {
      display: true,
      style: 'fixed',
    },
    leftSidePanel: {
      display: true,
    },
    rightSidePanel: {
      display: true,
    },
  },
  form: {
    toolbar: {
      type: 'group',
      title: 'Toolbar',
      children: {
        position: {
          title: 'Position',
          type: 'radio',
          options: [
            {
              name: 'Above',
              value: 'above',
            },
            {
              name: 'Below',
              value: 'below',
            },
          ],
        },
      },
    },
  },
};

export default config;
