import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import {
  localePrefix,
  defaultLocale,
  locales,
  pathnames,
  alternateLinks,
  localeDetection,
} from "./config";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localePrefix,
  alternateLinks,
  localeDetection,
});

export const config = {
  matcher: ["/", `/(en|tr|de)/:path*`, "/((?!api|_next|_vercel|.*\\..*).*)"],
};
export default (request: NextRequest) => {
  return nextIntlMiddleware(request);
};
