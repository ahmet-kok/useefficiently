import { CustomerStoriesText } from "@/components/customer-stories-text-render";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import Contact from "@/components/contact";
import contents from "@/public/contents/customer-stories/contents.json";
import { Metadata } from "next";
import information from "@/information.json";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { title, description } = contents.find(
    (content) => content.slug === params.slug
  ) || { title: "", description: "" };

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
};

export default function CustomerStory({ params }: Props) {
  return (
    <>
      <div className="w-full md:container mx-auto px-4 overflow-y-auto">
        <Link href="/customer-stories" className="w-[250px]">
          <ShinyButton
            text="Back to Other Customer Stories"
            className="w-fit "
          />
        </Link>
      </div>
      <CustomerStoriesText slug={params.slug} />
      <Contact />
    </>
  );
}
