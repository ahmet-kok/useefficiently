import { MetadataRoute } from "next";
import { locales, pathnames, defaultLocale, host } from "@/config";
import { getPathname } from "@/navigation";
import contents from "@/public/contents/customer-stories/contents.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>;

  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number]
  ) {
    const pathname = getPathname({ locale, href: key });
    return `${host}${pathname === "/" ? "" : pathname}`;
  }
  const staticUrls = keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(key, locale)])
      ),
    },
  }));
  const customerStoriesUrls = contents.map((content) => ({
    url: `${host}/customer-stories/${content.slug}`,
    alternates: {
      languages: {},
    },
  }));
  return [...staticUrls, ...customerStoriesUrls];
}
