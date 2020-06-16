import { Component, Listen, Prop, State, h } from '@stencil/core';

import {  ForwardArrow, Logo } from '../../icons';
import { l10n } from '../../l10n';

@Component({
  tag: 'docs-header',
  styleUrl: 'header.css'
})
export class DocsHeader {
  @State() hidden = false;
  private frameRequested = false;
  private prevScroll = 0;

  @Prop() toggleClickFn!: (e: Event) => void;

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    if (!this.frameRequested) {
      requestAnimationFrame(() => {
        const { scrollY } = window;
        this.hidden = scrollY > 60 && scrollY > this.prevScroll;
        this.prevScroll = scrollY;
        this.frameRequested = false;
      });
      this.frameRequested = true;
    }
  }

  hostData() {
    return {
      class: { hidden: this.hidden }
    };
  }

  render() {
    return (
      <header>
        <stencil-route-link url="/docs/">
          <Logo class="HeaderLogo"/>
        </stencil-route-link>

        <header-mobile-collapse>
          <nav class="SectionNav">
            <div class="SectionNav-tabs">
                <stencil-route-link url="/docs/" urlMatch={[/^\/docs(?!\/(api|components|cli|native)).*$/]}>{l10n.getString('header-guide')}</stencil-route-link>
                <stencil-route-link url="/docs/components" urlMatch={['/docs/api', '/docs/components']}>{l10n.getString('header-components')}</stencil-route-link>
            </div>
          </nav>

          <nav class="UtilNav">
            <senna-search></senna-search>
            <a href="https://github.com/senna-ui/senna" target="_blank">
              <ion-icon name="logo-github" class="lg-only"></ion-icon>
              <span class="sm-only">GitHub <ForwardArrow class="Dropdown-arrow"/></span>
            </a>
            <a href="https://twitter.com/senna-ui" target="_blank">
              <ion-icon name="logo-twitter" class="lg-only"></ion-icon>
              <span class="sm-only">Twitter <ForwardArrow class="Dropdown-arrow"/></span>
            </a>
          </nav>
        </header-mobile-collapse>
      </header>
    );
  }
}
