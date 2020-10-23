import { Locale } from './definitions';

export const slugify = (text: string): string =>
  text.toLowerCase().replace(/[^\w]+/g, '-');

export const sample = (array: any[]): any =>
  array[Math.floor(Math.random() * array.length)];

export const keyBy = (
  array: any[],
  keyMap: (item: any) => string,
  valMap?: (item: any) => any
): Record<string, any> =>
  array.reduce((obj, item) => {
    obj[keyMap(item)] = valMap ? valMap(item) : item;
    return obj;
  }, {});

export const debounce = (fn: (...args: any[]) => any, wait: number) => {
  let scheduled: any = null;
  return (...args: any) => {
    clearTimeout(scheduled);
    scheduled = setTimeout(fn, wait, ...args);
  };
};

export const pathLocalePrefixRegex = new RegExp(
  `^\\/docs\\/((${Object.values(Locale).join('|')})\b)\\/?`
);
export const localeFromPath = (path: string): string => {
  const regexRes = pathLocalePrefixRegex.exec(path);
  const locale = regexRes ? regexRes[1] : null;
  return locale || 'en';
};
