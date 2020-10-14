import en from './assets/locales/en/messages.json';
import { Locale } from './definitions';
import { pathLocalePrefixRegex } from './utils';

export const MESSAGES_ALL: any = {
  [Locale.EN]: en,
};

export class DocsLocalization {
  private readonly locale: string;
  private readonly bundle: { [id: string]: string };

  constructor() {
    const regexRes = pathLocalePrefixRegex.exec(window.location.pathname);
    const language = regexRes ? regexRes[1] : null;
    this.locale = language && Boolean(MESSAGES_ALL[language]) ? language : 'en';
    this.bundle = MESSAGES_ALL[this.locale];
  }

  getLocale = () => this.locale;

  getString = (id: string) => this.bundle[id] || (en as any)[id];
}

export const l10n = new DocsLocalization();
