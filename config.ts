import { LocalePrefix } from "next-intl/routing";

export const locales = ['en', 'de', 'tr'] as const;
export const localePrefix = 'as-needed' satisfies LocalePrefix;