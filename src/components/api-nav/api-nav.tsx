import { Component, h } from '@stencil/core';

import apiMenu from '../../api-menu.json';
import { l10n } from '../../l10n';

@Component({
  tag: 'docs-api-nav',
  styleUrl: 'api-nav.css',
})
export class ApiNav {
  private grouped: { [key: string]: any } = {};

  componentWillLoad() {
    apiMenu.forEach((item: { title: string; path: string; menu?: any }) => {
      const group = item.menu?.group || 'ungrouped';
      const subGroup = item.menu?.subGroup || 'ungrouped';
      this.grouped[group] = this.grouped[group] || {};
      this.grouped[group][subGroup] = this.grouped[group][subGroup] || [];
      this.grouped[group][subGroup].push(item);
    });
  }

  item({ path, title }: { path: string; title: string; menu?: any }) {
    return (
      <li key={path}>
        <stencil-route-link
          url={path}
          strict={false}
          exact
          activeClass="Nav-link--active"
          anchorClass="Nav-link"
        >
          <span>{title}</span>
        </stencil-route-link>
      </li>
    );
  }

  renderSubGroup(
    key: string,
    subGroupKey: string,
    subGroup: {
      path: string;
      title: string;
      menu: { group: string; subGroup?: string };
    }[]
  ) {
    if (subGroupKey === 'ungrouped') {
      return subGroup.map(item => this.item(item));
    }
    const text = l10n.getString(`menu-api-${key}-${subGroupKey}`);
    return (
      <li key={key + subGroupKey}>
        <section>
          {text !== undefined ? <header class="Nav-header-2">{text}</header> : null}
          <ul class="Nav-subnav" style={{ '--level': '2' }}>
            {subGroup.map(item => this.item(item))}
          </ul>
        </section>
      </li>
    );
  }

  renderGroup(
    key: string,
    group: Record<
      string,
      {
        path: string;
        title: string;
        menu: { group: string; subGroup?: string };
      }[]
    >
  ) {
    const text = l10n.getString(`menu-api-${key}`);
    return (
      <li key={key}>
        <section>
          {text !== undefined ? <header class="Nav-header">{text}</header> : null}
          <ul class="Nav-subnav" style={{ '--level': '1' }}>
            {key === 'ungrouped'
              ? Object.values(group)
                  .reduce((a, b) => a.concat(b), [])
                  .map(item => this.item(item))
              : Object.entries(group).map(([subGroupKey, subGroup]) =>
                  this.renderSubGroup(key, subGroupKey, subGroup)
                )}
          </ul>
        </section>
      </li>
    );
  }

  render() {
    const { ungrouped, ...grouped } = this.grouped;
    const entries = [['ungrouped', ungrouped], ...Object.entries(grouped)];
    return (
      <ul class="Nav">{entries.map(([key, group]) => this.renderGroup(key, group))}</ul>
    );
  }
}
