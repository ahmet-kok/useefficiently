import { LocalePrefix, Pathnames } from "next-intl/routing";
export const locales = ["en", "de", "tr"] as const;
export const localePrefix = "as-needed" satisfies LocalePrefix;
export const defaultLocale = "en" as const;
export const alternateLinks = false;
export const localeDetection = true;
export const pathnames = {
  // If all locales use the same pathname, a single
  // external path can be used for all locales
  "/": "/",
  /*   "/blog": "/blog",*/
  en: "/en",
  de: "/de",
  tr: "/tr",
  "/#faq": "/#faq",
  // If locales use different paths, you can
  // specify each external path per locale
  /*   "/about": {
    en: "/about",
    tr: "/hakkimizda",
    de: "/ueber-uns",
  }, */
  "/portfolio": {
    en: "/portfolio",
    de: "/portfolio",
    tr: "/portfolyo",
  },
  "/team": {
    en: "/team",
    de: "/mannschaft",
    tr: "/takim",
  },

  /*   // Dynamic params are supported via square brackets
  "/news/[articleSlug]-[articleId]": {
    en: "/news/[articleSlug]-[articleId]",
    de: "/neuigkeiten/[articleSlug]-[articleId]",
  },

  // Static pathnames that overlap with dynamic segments
  // will be prioritized over the dynamic segment
  "/news/just-in": {
    en: "/news/just-in",
    de: "/neuigkeiten/aktuell",
  },

  // Also (optional) catch-all segments are supported
  "/categories/[...slug]": {
    en: "/categories/[...slug]",
    de: "/kategorien/[...slug]", 
  },*/
} satisfies Pathnames<typeof locales>;

export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:3000`;
