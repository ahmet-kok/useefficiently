import { Metadata } from "next";
import information from "@/information.json";
import Link from "next/link";
import { customers } from "@/use";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { metaTitle, description } = customers.find(
    (content) => content.slug === params.slug
  ) || { metaTitle: "", description: "" };

  const metadata = {
    title: metaTitle,
    description: description,
    openGraph: {
      title: metaTitle,
      description: description,
      url: information.website,
      type: "website",
      images: [
        {
          url: information.website + "/api/og?title=" + metaTitle,
          alt: information.company + " Logo",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@" + information.slug,
      title: metaTitle,
      description: description,
      images: information.website + "/api/og?title=" + metaTitle,
    },
  };

  return metadata;
};

export default function CustomerStory({ params }: Props) {
  const { title, detail } = customers.find(
    (content) => content.slug === params.slug
  ) || redirect("/");
  return (
    <>
      <div className="mx-auto container p-4 sm:p-6">
        <Link href="/customer-stories" className="w-[250px]"></Link>
      </div>

      <article
        className="prose sm:prose-xl prose-zinc article"
        dangerouslySetInnerHTML={{ __html: title + detail }}
      />
      <div className="flex p-8">
        <Link href="/customer-stories" className="w-[250px] mx-auto"></Link>
      </div>
    </>
  );
}
