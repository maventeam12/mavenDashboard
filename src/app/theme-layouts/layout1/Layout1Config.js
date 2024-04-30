const config = {
  title: 'Layout 1 - Vertical',
  defaults: {
    mode: 'container',
    containerWidth: 10000,
    navbar: {
      display: true,
      style: 'style-1',
      folded: true,
      position: 'left',
    },
    toolbar: {
      display: true,
      style: 'fixed',
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
    navbar: {
      type: 'group',
      title: 'Navbar',
      children: {
        position: {
          title: 'Position',
          type: 'radio',
          options: [
            {
              name: 'Left',
              value: 'left',
            },
            {
              name: 'Right',
              value: 'right',
            },
          ],
        },
        style: {
          title: 'Style',
          type: 'radio',
          options: [
            {
              name: 'Slide (style-1)',
              value: 'style-1',
            },
            {
              name: 'Folded (style-2)',
              value: 'style-2',
            },
            {
              name: 'Tabbed (style-3)',
              value: 'style-3',
            },
            {
              name: 'Tabbed Dense (style-3-dense)',
              value: 'style-3-dense',
            },
          ],
        },
      },
    },
  },
};

export default config;
