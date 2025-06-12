import information from "@/information.json";
import { Metadata } from "next";
import FilloutEmbed from "@/components/fillout";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Schedule a Meeting with UseEfficiently";
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

export default function Page() {
  return <FilloutEmbed mode="fullscreen" show />;
}
