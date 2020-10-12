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
  'menu-api-forms': {
    'sen-fieldset': '/docs/api/fieldset',
    'sen-input': '/docs/api/input',
    'sen-form-field': '/docs/api/form-field',
    'sen-typeahead': '/docs/api/typeahead',
  },
  'menu-api-layout': {
    'sen-menu': '/docs/api/menu',
    'sen-menu-item': '/docs/api/menu-item',
    'sen-card': '/docs/api/card',
    'sen-card-title': '/docs/api/card-title',
    'sen-card-body': '/docs/api/card-body',
    'sen-card-actions': '/docs/api/card-actions',
  },
  'menu-api-typography': {
    'sen-text': '/docs/api/text',
  }
};
