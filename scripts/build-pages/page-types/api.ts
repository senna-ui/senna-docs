import fs from 'fs-extra';

import type { JsonDocsTag } from '@senna-ui/docs';

import { components } from '@senna-ui/docs/core.json';

import type { DocsMenu, DocsDemoUrls, DocsCodePen } from '../../../src/definitions';
import type { Page } from '../index';
import { buildPages } from '../index';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build API pages',
  task: () => buildPages(getAPIPages),
};

export const getAPIPages = async (): Promise<Page[]> => {
  const pages = components
    .filter(c => !c.tag.startsWith('demo')) // Exclude demo pages
    .map(
      async (component): Promise<Page> => {
        const title = component.tag;
        const path = `/docs/api/${title.slice(4)}`;
        const { readme, usage, props, methods, ...contents } = component;
        return {
          title,
          path,
          ...getDocsTagsValues(component),
          body: markdownRenderer(readme || '', path),
          usage: renderUsage(usage, path),
          props: renderDocsKey(props, path),
          methods: renderDocsKey(methods, path),
          template: 'api',
          ...contents,
        };
      }
    );
  const allPages = await Promise.all(pages);
  await fs.promises.writeFile(
    'src/api-menu.json',
    JSON.stringify(allPages.map(({ title, path, menu }) => ({ title, path, menu }))),
    { flag: 'w' }
  );
  return allPages;
};

const renderUsage = (usage: any, baseUrl: any): Record<string, string> =>
  Object.keys(usage).reduce((out: any, key: string) => {
    out[key] = markdownRenderer(usage[key], baseUrl);
    return out;
  }, {});

const renderDocsKey = (
  items: any,
  baseUrl: string
): { docs: string; [key: string]: any } =>
  items.map((item: any) => ({
    ...item,
    docs: markdownRenderer(item.docs, baseUrl),
  }));

const getDocsTagsValues = ({
  docsTags,
  demo: paramDemo,
  codePen,
  codePenLinks = null,
  menu: paramMenu,
}: {
  docsTags: JsonDocsTag[];
  demo?: DocsDemoUrls;
  codePen?: DocsCodePen;
  codePenLinks?: DocsCodePen[] | null;
  menu?: DocsMenu;
  [key: string]: any;
}): {
  demo?: DocsDemoUrls;
  codePenLinks?: DocsCodePen[];
  menu?: DocsMenu;
} => {
  const menu = paramMenu || getDocsTagJson<DocsMenu>('docsMenu', docsTags);
  const demo = codePenToDemoUrls({ docsTags, codePen }) || paramDemo;
  const penLinks =
    codePenLinks || getDocsTagJson<DocsCodePen[]>('docsCodePenLinks', docsTags, '[]');
  return {
    demo,
    ...(penLinks ? { codePenLinks: (penLinks as any)?.filter((i: any) => i) } : {}),
    menu,
  };
};

const getDocsTagJson = <T>(
  propName: string,
  docsTags: JsonDocsTag[],
  fallback = 'null'
): T => {
  try {
    return JSON.parse(
      docsTags.find(({ name }) => name === propName)?.text || fallback
    ) as T;
  } catch (e) {
    console.error('Error parsing JSON in doc tag:', propName, docsTags);
    throw e;
  }
};

const codePenToDemoUrls = ({
  docsTags = [],
  codePen,
}: {
  docsTags?: JsonDocsTag[];
  codePen?: DocsCodePen;
}): DocsDemoUrls | undefined => {
  const { user, id, text } =
    codePen || getDocsTagJson<DocsCodePen>('docsCodePen', docsTags) || {};
  if (!user || !id) {
    return undefined;
  }
  return {
    url: `https://codepen.io/${user}/embed/${id}?height=265&theme-id=light&default-tab=result`,
    source: `https://codepen.io/${user}/pen/${id}?editors=1000`,
    text,
  };
};
