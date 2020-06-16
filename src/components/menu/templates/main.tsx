import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-intro': {
    'menu-intro-overview': '/docs',
  },
  'menu-layout': {
    'menu-layout-grid': '/docs/layout/grid',
  },
  'menu-react': {
    'menu-react-overview': '/docs/react',
    /*
    'menu-react-your-first-app': '/docs/react/your-first-app',
    '': {
      'sub-menu-key': '/docs/react/your-first-app/step-1',
    },
    */
  },
  'menu-core-concepts': {
    'menu-core-concepts-fundamentals': '/docs/core-concepts/fundamentals',
  },
};
