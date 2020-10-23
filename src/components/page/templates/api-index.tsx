import { h } from '@stencil/core';

import apiMenu from '../../../api-menu.json';
import { toHypertext } from '../to-hypertext';

const listStyle = {
  fontFamily: 'var(--code-font-family',
  fontSize: '13px',
};

export default (props: { [key: string]: any }) => {
  return (
    <article>
      <h1>{props.page.title}</h1>
      <section class="markdown-content">{toHypertext(h, props.page.body)}</section>
      <hr />
      <ul style={listStyle}>
        {apiMenu.map(({ title, path }: { title: string; path: string }) => (
          <li key={path}>
            <stencil-route-link url={path}>{title}</stencil-route-link>
          </li>
        ))}
      </ul>
    </article>
  );
};
