import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-api-button': {
    'sen-button': '/docs/api/button',
  },
  'menu-api-grid': {
    'sen-container': '/docs/api/container',
    'sen-row': '/docs/api/row',
    'sen-col': '/docs/api/col',
  },
};
