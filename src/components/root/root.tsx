import type { EventEmitter } from '@stencil/core';
import { Build, Component, Event, State, Watch, h } from '@stencil/core';
import type { LocationSegments, RouterHistory } from '@stencil/router';

@Component({
  tag: 'docs-root',
  styleUrl: 'root.css',
})
export class DocsRoot {
  history: RouterHistory | null = null;

  @State() isMenuToggled = false;

  setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen(this.newPage.bind(this));
    }
  };

  @Event() pageChanged!: EventEmitter;
  newPage(location: LocationSegments) {
    (window as any).gtag('config', 'UA-XXX-1', {
      page_path: location.pathname + location.search,
    });
    this.pageChanged.emit(location);
  }

  @Watch('isMenuToggled')
  lockScroll(isMenuToggled: boolean) {
    if (Build.isBrowser && this.isSmallViewport()) {
      document.body.classList.toggle('scroll-lock', isMenuToggled);
    }
  }

  toggleMenu = () => {
    this.isMenuToggled = !this.isMenuToggled;
  };

  handlePageClick = () => {
    if (this.isSmallViewport() && this.isMenuToggled) {
      this.isMenuToggled = false;
    }
  };

  isSmallViewport() {
    return matchMedia('(max-width: 768px)')?.matches;
  }

  render() {
    const layout = {
      Layout: true,
      'is-menu-toggled': this.isMenuToggled,
    };

    return (
      <stencil-router class={layout}>
        <stencil-route style={{ display: 'none' }} routeRender={this.setHistory} />
        <docs-header toggleClickFn={this.toggleMenu} />
        <docs-menu toggleClickFn={this.toggleMenu} />
        <stencil-route
          url="/docs/:page*"
          routeRender={props => (
            <docs-page
              history={props.history}
              path={`/docs/pages/${props.match.params.page || 'index'}.json`}
              onClick={this.handlePageClick}
            />
          )}
        />
      </stencil-router>
    );
  }
}
