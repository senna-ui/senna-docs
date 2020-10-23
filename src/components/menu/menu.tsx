// import { FrameworkSelect } from './framework-select';
import { Component, Prop, h } from '@stencil/core';

import { Logo } from '../../icons';

import componentsTemplate from './templates/components';
import mainTemplate from './templates/main';

@Component({
  tag: 'docs-menu',
  styleUrl: 'menu.css',
})
export class DocsMenu {
  @Prop() toggleClickFn!: (e: Event) => void;

  render() {
    return [
      <header>
        <docs-menu-toggle onClick={this.toggleClickFn} />
        <stencil-route-link url="/docs/">
          <Logo class="MenuLogo" />
        </stencil-route-link>
      </header>,
      <stencil-route-switch>
        <stencil-route>
          <section class="MenuControls">
            <framework-select />
          </section>
        </stencil-route>
      </stencil-route-switch>,
      <stencil-route-switch scrollTopOffset={0} class="Menu">
        <stencil-route
          url="/docs/:lang([a-z]{2})?/(components|api)"
          routeRender={componentsTemplate}
        />
        <stencil-route routeRender={mainTemplate} />
      </stencil-route-switch>,
    ];
  }
}
