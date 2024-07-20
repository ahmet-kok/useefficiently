"use client";

import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedLogoCloud from "./logocloud";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

import dynamic from "next/dynamic";
const PortfolioPost = dynamic(() => import("@/components/portfolio-post"), {
  ssr: false,
});
import Link from "next/link";
import { cn } from "@/lib/utils";
export default function Testimonials({ id }: { id?: string }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerDownloaded, setDrawerDownloaded] = useState(false);
  const [content, setContent] = useState("");
  const t = useTranslations("Testimonials");
  const messages = useMessages();
  const testimonials = Object.keys(messages["Testimonials"]);
  testimonials.pop();
  useEffect(() => {
    setDrawerDownloaded(true);
  }, [isDrawerOpen]);

  return (
    <>
      {/*       <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t("ClientTestimonials.subtitle")}
        </h2>
        <p className="max-w-[800px] mx-auto  text-gray-700 dark:text-gray-200 md:text-xl leading-relaxed lg:text-lg xl:text-xl">
          {t("ClientTestimonials.description")}
        </p>
      </div> */}
      <AnimatedLogoCloud animated={false} />
      <div className=" grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, key) => (
          <Testimonial
            key={key}
            testimonial={testimonial}
            t={t}
            setIsDrawerOpen={setIsDrawerOpen}
            setContent={setContent}
          />
        ))}
      </div>
      {isDrawerDownloaded && (
        <PortfolioPost
          slug={content ? content : ""}
          open={isDrawerOpen ? true : false}
          setOpen={setIsDrawerOpen}
        />
      )}
    </>
  );
}

const Testimonial = ({ testimonial, t, setIsDrawerOpen, setContent }: any) => (
  <div
    className={cn(
      " p-3 pt-0 lg:p-6 grid",
      "group overflow-hidden rounded-lg",
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)]  dark:border-none  dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
    )}
  >
    <div>
      <div className="flex relative items-center justify-between my-4">
        <Image
          src={t(`${testimonial}.avatar`)}
          width={30}
          height={30}
          alt={`${t(`${testimonial}.customer`)} Avatar`}
          className="h-10 w-auto rounded-full"
        />
        <Image
          src={t(`${testimonial}.logo`)}
          width={0}
          height={0}
          alt={`${t(`${testimonial}.company`)} Logo`}
          className="max-h-10 max-w-40 w-auto right-0 dark:brightness-0  dark:invert"
        />
      </div>

      <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
        {t(`${testimonial}.customer`)}
      </p>

      <p className="mt-4 text-sm leading-relaxed  text-neutral-600 dark:text-neutral-200 ">
        &quot;{t(`${testimonial}.text`)}&quot;
      </p>
    </div>
    {t(`${testimonial}.story`) == "true" && (
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto mt-4 justify-self-end self-end"
        onClick={(event) => {
          event.preventDefault(); // prevent default navigation behavior

          setIsDrawerOpen(true);
          setContent(t(`${testimonial}.slug`));
        }}
      >
        <Link href={`/portfolio/${t(`${testimonial}.slug`)}`}>
          {"Learn more"}
          <span className="sr-only">about {t(`${testimonial}.company`)}</span>
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);
