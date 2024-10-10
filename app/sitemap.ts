import { MetadataRoute } from "next";
import { customers } from "@/use";

export default function sitemap(): MetadataRoute.Sitemap {
  const customerSitemap: MetadataRoute.Sitemap = customers.map((customer) => ({
    url: `https://useefficiently.com/${customer.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
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
    {
      url: "https://useefficiently.com/schedule-meeting",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...customerSitemap,
  ];
}
