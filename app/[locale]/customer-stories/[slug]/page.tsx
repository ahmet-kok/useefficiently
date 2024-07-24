"use client";
import { CustomerStoriesText } from "@/components/customer-stories-text-render";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";

import { useTranslations } from "next-intl";
import Contact from "@/components/contact";

export default function CustomerStory({
  params: { slug },
}: {
  params: { slug: string; title: string; description: string };
}) {
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
