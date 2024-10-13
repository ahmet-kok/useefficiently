import information from "@/information.json";
import { Metadata } from "next";
import CalCom from "@/components/calcom";

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
  return (
    <div className="grid place-content-center grid-cols-1 pt-20 items-center justify-center gap-16">
      <h1 className="text-center text-4xl sm:text-6xl font-medium leading-tight content-center ">
        Schedule a Meeting with UseEfficiently
      </h1>
      <CalCom />
    </div>
  );
}
