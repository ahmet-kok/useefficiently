import Team from "@/components/team";
import { Metadata } from "next";
import information from "@/information.json";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Team";
  const description = "Meet the team behind UseEfficiently.";

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

export default function TeamPage() {
  return <Team />;
}
