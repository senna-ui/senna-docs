import fs from 'fs-extra';
import { join, resolve } from 'path';

import { components } from '@senna-ui/docs/core.json';

import type { Page } from '../index';
import { buildPages } from '../index';
import markdownRenderer from '../markdown-renderer';

export default {
  title: 'Build API pages',
  task: () => buildPages(getAPIPages),
};

const getAPIPages = async (): Promise<Page[]> => {
  const pages = components.map(
    async (component): Promise<Page> => {
      const title = component.tag;
      const path = `/docs/api/${title.slice(4)}`;
      const demoUrl = await getDemoUrl(component);
      const { readme, usage, props, methods, ...contents } = component;
      return {
        title,
        path,
        ...demoUrl,
        body: markdownRenderer(readme || '', path),
        usage: renderUsage(usage, path),
        props: renderDocsKey(props, path),
        methods: renderDocsKey(methods, path),
        template: 'api',
        ...contents,
      };
    }
  );
  return Promise.all(pages);
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

const DEMOS_PATH = resolve(__dirname, '../../../src/demos');

const getDemoUrl = async (
  component: any
): Promise<{ demoUrl?: string; demoSourceUrl?: string }> => {
  const demoPath = `api/${component.tag.slice(4)}/index.html`;
  if (await fs.pathExists(join(DEMOS_PATH, demoPath))) {
    return {
      demoUrl: `/docs/demos/${demoPath}`,
      demoSourceUrl: `https://github.com/senna-ui/senna-docs/tree/master/src/demos/${demoPath}`,
    };
  }
  return {};
};
