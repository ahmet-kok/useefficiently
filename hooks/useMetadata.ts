"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import information from "@/information.json";
const useMetadata = (title: string, description: string) => {
  const pathname = usePathname();

  useEffect(() => {
    // Set the page title
    document.title = title;

    // Set description meta tag
    const setMetaTag = (name: string, content: string) => {
      let metaTag = (document.querySelector(`meta[name="${name}"]`) ||
        document.createElement("meta")) as HTMLMetaElement;
      metaTag.name = name;
      metaTag.content = content;
      if (!metaTag.parentNode) {
        document.head.appendChild(metaTag);
      }
    };

    setMetaTag("description", description);

    // Set Open Graph meta tags
    const setMetaProperty = (property: string, content: string) => {
      let metaProperty =
        document.querySelector(`meta[property="${property}"]`) ||
        (document.createElement("meta") as HTMLMetaElement);
      metaProperty.setAttribute("property", property);
      metaProperty.setAttribute("content", content);
      if (!metaProperty.parentNode) {
        document.head.appendChild(metaProperty);
      }
    };

    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaProperty("og:url", `${information.website}${pathname}`);
    setMetaProperty("og:type", "website");
    setMetaProperty("og:image", `${information.website}/api/og?title=${title}`);

    // Set Twitter meta tags
    const setTwitterMeta = (name: string, content: string) => {
      let metaTag =
        document.querySelector(`meta[name="${name}"]`) ||
        (document.createElement("meta") as HTMLMetaElement);
      metaTag.setAttribute("name", name);
      metaTag.setAttribute("content", content);
      if (!metaTag.parentNode) {
        document.head.appendChild(metaTag);
      }
    };

    setTwitterMeta("twitter:card", "summary_large_image");
    setTwitterMeta("twitter:site", "@" + information.slug);
    setTwitterMeta("twitter:title", title);
    setTwitterMeta("twitter:description", description);
    setTwitterMeta(
      "twitter:image",
      `${information.website}/api/og?title=${title}`
    );
  }, [title, description, pathname, information]);
};

export default useMetadata;
