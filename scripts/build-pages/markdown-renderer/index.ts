import marked from 'marked';

import { resolve } from 'url';

import code from './code';
import heading from './heading';

const hasTrailingSlash = /\/$/;
const isInternal = /^\/docs\/.*/;
const isV3 = /^\/docs\/v3\//;

const renderer = new marked.Renderer();
renderer.heading = heading;
renderer.code = code;
renderer.link = function (href: string | null, title: string | null, text: string) {
  const { baseUrl } = this.options;

  if (baseUrl !== undefined && href !== null) {
    href = resolve(hasTrailingSlash.test(baseUrl) ? baseUrl : `${baseUrl}/`, href);
  }

  if (href !== null && isInternal.test(href) && !isV3.test(href)) {
    const anchorTitle = title ? `anchorTitle=${title}` : '';
    return `<stencil-route-link url=${href} ${anchorTitle}>${text}</stencil-route-link>`;
  }

  return `<a href=${href} ${title !== null ? `title=${title}` : ''}>${text}</a>`;
};

export default (markdown: string, baseUrl?: string): string => {
  return marked(markdown, { baseUrl, renderer });
};
