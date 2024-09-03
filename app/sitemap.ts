import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://useefficiently.com/",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://useefficiently.com/about",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
