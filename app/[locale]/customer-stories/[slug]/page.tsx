"use client";


import { CustomerStoriesText } from "@/components/customer-stories-text-render";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import Contact from "@/components/contact";
import useMetadata from "@/hooks/useMetadata";
import contents from "@/public/contents/customer-stories/contents.json";

export default function CustomerStory({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { title, description } = contents.find(
    (content) => content.slug === slug
  ) || { title: "", description: "" };
  useMetadata(title + " - UseEfficiently", description);
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
      <CustomerStoriesText slug={slug} />
      <Contact />
    </>
  );
}
