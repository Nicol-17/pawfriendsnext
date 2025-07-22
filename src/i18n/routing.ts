import {defineRouting} from 'next-intl/routing';

export const locales = ['de', 'es', 'en', 'fr'] as const;

export const routing = defineRouting({
    locales,
    defaultLocale: 'es'
});