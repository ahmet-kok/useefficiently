import { UseCasesText } from "@/components/use-cases-text-render";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import Contact from "@/components/contact";
import contents from "@/public/contents/use-cases/contents.json";
import { Metadata } from "next";
import information from "@/information.json";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@/components/icons";
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

export default function UseCase({ params }: Props) {
  return (
    <>
      <div className="mx-auto container p-4 sm:p-6">
      <Button asChild className="pointer-events-auto">
          <Link href="/use-cases">
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Back to other stories
          </Link>
        </Button>
      </div>
      <UseCasesText slug={params.slug} />
      <div className="flex p-8">
      <Button asChild className="pointer-events-auto">
          <Link href="/use-cases">
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Back to other stories
          </Link>
        </Button>
      </div>
      <Contact />
    </>
  );
}
