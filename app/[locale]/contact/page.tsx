import Contact from "@/components/contact";
import { Metadata } from "next";
import information from "@/information.json";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Contact";
  const description = "Contact us for any questions or feedback you may have.";

  const metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: information.website,
      type: "website",
      images: [
        {
          url: information.website + "/api/og?title=" + title,
          alt: information.company + " Logo",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@" + information.slug,
      title: title,
      description: description,
      images: information.website + "/api/og?title=" + title,
    },
  };

  return metadata;
}

export default function ContactPage() {
  return <Contact page />;
}
