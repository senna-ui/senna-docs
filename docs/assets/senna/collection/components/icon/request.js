import { validateContent } from './validate';
export const senIconContent = new Map();
const requests = new Map();
export const getSvgContent = (url, sanitize) => {
  // see if we already have a request for this url
  let req = requests.get(url);
  if (!Boolean(req)) {
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
      // we don't already have a request
      req = fetch(url).then((rsp) => {
        if (rsp.ok) {
          return rsp.text().then((svgContent) => {
            if (Boolean(svgContent) && sanitize !== false) {
              svgContent = validateContent(svgContent);
            }
            senIconContent.set(url, svgContent || '');
          });
        }
        senIconContent.set(url, '');
        return null;
      });
      // cache for the same requests
      requests.set(url, req);
      return req;
    }
    else {
      // set to empty for ssr scenarios and resolve promise
      senIconContent.set(url, '');
      return Promise.resolve();
    }
  }
  return req || Promise.resolve();
};
