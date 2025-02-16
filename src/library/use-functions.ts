import { useContext, useEnvData } from '@builder.io/qwik';

import type { SpeakLocale, SpeakConfig, Translation, SpeakState } from './types';
import { SpeakContext } from './context';

export const useSpeakContext = (): SpeakState => useContext(SpeakContext);

export const useSpeakLocale = (): SpeakLocale => <SpeakLocale>useContext(SpeakContext).locale;

export const useTranslation = (): Translation => useContext(SpeakContext).translation;

export const useSpeakConfig = (): SpeakConfig => useContext(SpeakContext).config;

/**
 * Get 'url' env data
 * @returns URL object
 */
export const useUrl = (): URL => new URL(useEnvData('url') ?? document.location.href);
