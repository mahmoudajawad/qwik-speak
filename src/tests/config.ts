import { handleMissingTranslation$, loadTranslation$, resolveLocale$, storeLocale$ } from '../library/constants';
import { SpeakLocale, SpeakConfig, Translation, SpeakState } from '../library/types';

const translationData: Translation = {
  'en-US': {
    test: 'Test',
    testParams: 'Test {{param}}',
    nested: {
      test: 'Test'
    },
    one: 'One software developer',
    other: '{{value}} software developers'
  },
  'it-IT': {
    test: 'Prova'
  }
};

const config: SpeakConfig = {
  defaultLocale: { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles', units: { 'length': 'mile' } },
  supportedLocales: [
    { lang: 'it-IT', currency: 'EUR', timeZone: 'Europe/Rome', units: { 'length': 'kilometer' } },
    { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles', units: { 'length': 'mile' } }
  ],
  assets: [],
  keySeparator: '.',
  keyValueSeparator: '@@'
};

const locale: SpeakLocale = {
  lang: 'en-US',
  currency: 'USD',
  timeZone: 'America/Los_Angeles',
  units: { 'length': 'mile' }
};

export const ctx: SpeakState = new Proxy({
  locale: locale,
  translation: translationData,
  config: config,
  translateFn: {
    loadTranslation$: loadTranslation$,
    resolveLocale$: resolveLocale$,
    storeLocale$: storeLocale$,
    handleMissingTranslation$: handleMissingTranslation$
  }
}, {});
