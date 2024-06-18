import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

const nextIntlMiddleware = createMiddleware({
  locales: ["en", "de", "tr"],
  defaultLocale: "en",
  pathnames: {
    en: "/en",
    de: "/de",
    tr: "/tr",
  },
  localePrefix: "as-needed",

  alternateLinks: false,
  localeDetection: false,
});

export const config = {
  matcher: [
    "/",
    `/(en|fr|es|pt|ja|ru|ko)/:path*`,
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
export default (request: NextRequest) => {
  return nextIntlMiddleware(request);
};
