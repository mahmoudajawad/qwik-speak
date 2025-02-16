import { component$, Slot, useMount$ } from '@builder.io/qwik';

import { useUrl, useSpeakContext } from './use-functions';
import { loadTranslation, addData } from './core';

export interface SpeakProps {
  /**
   * Assets to load
   */
  assets: string[];
  /**
   * Optional additional languages to preload data for
   */
  langs?: string[];
}

/**
 * Add translation data to a Speak context
 */
export const Speak = component$((props: SpeakProps) => {
  const ctx = useSpeakContext();
  const { locale, translation, config } = ctx;

  // Get URL object
  const url = useUrl();

  // Will block the rendering until callback resolves
  useMount$(async () => {
    const resolvedLangs = new Set(props.langs || []);
    resolvedLangs.add(locale.lang);

    // Load translation data
    for (const lang of resolvedLangs) {
      const loadedTranslation = await loadTranslation(lang, ctx, url, props.assets);
      addData(loadedTranslation, translation[lang], lang);
      Object.assign(translation[lang], loadedTranslation[lang]);
    }

    const resolvedAssets = new Set([...config.assets, ...props.assets]);
    Object.assign(config.assets, Array.from(resolvedAssets));
  });

  return <Slot />;
});
