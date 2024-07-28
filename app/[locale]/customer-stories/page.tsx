import contents from "@/public/contents/customer-stories/contents.json";
import { CustomerStoriesBento } from "@/components/customer-stories-bento";
import Section from "@/components/section";
import { Metadata } from "next";
import information from "@/information.json";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Customer Stories";
  const description = "Read about how our customers use UseEfficiently.";

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
    <Section center h1>
      <CustomerStoriesBento contents={contents} />
    </Section>
  );
}
