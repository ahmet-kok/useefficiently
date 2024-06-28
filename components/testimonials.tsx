"use client";

import { Badge } from "@/components/ui/badge";
import { useLocale, useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedLogoCloud from "./logocloud";
import { Button } from "./ui/button";
import { PortfolioPost } from "./portfolio-post";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { cn } from "@/lib/utils";
export default function Testimonials({
  contentSlug,
  open,
}: {
  contentSlug: string | undefined;
  open: boolean | undefined;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(open);
  const [content, setContent] = useState(contentSlug);
  const t = useTranslations("Testimonials");
  const messages = useMessages();
  const testimonials = Object.keys(messages["Testimonials"]);
  testimonials.pop();
  const router = useRouter();
  const locale = useLocale();
  useEffect(() => {
    if (!isDrawerOpen && open) {
      console.log("Drawer is closed");
      router.replace(`/${locale}`);
    }
  }, [isDrawerOpen, open, router, locale]);

  return (
    <>
      <section id="team" className="w-full  py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4">
            <Badge variant="outline">{t("ClientTestimonials.title")}</Badge>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("ClientTestimonials.subtitle")}
            </h2>
            <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-3">
              {t("ClientTestimonials.description")}
            </p>
          </div>
        </div>
        <AnimatedLogoCloud animated={false} />
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6  mx-auto 2xl:px-0  lg:gap-8">
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
      </section>
      <PortfolioPost
        slug={content ? content : ""}
        open={isDrawerOpen ? true : false}
        setOpen={setIsDrawerOpen}
      />
    </>
  );
}

const Testimonial = ({ testimonial, t, setIsDrawerOpen, setContent }: any) => (
  <div
    className={cn(
      " p-3 pt-0 lg:p-6 grid",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      "group     overflow-hidden rounded-lg",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
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
          className="max-h-10 max-w-40 w-auto right-0 "
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
        <Link href={t(`${testimonial}.slug`)}>
          {"Learn more"}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);
