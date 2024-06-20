"use client";

import { Badge } from "@/components/ui/badge";
import { useLocale, useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedLogoCloud from "./logocloud";
import { Button } from "./ui/button";
import { BlogPost } from "./portfolio-post";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial}
              testimonial={testimonial}
              t={t}
              setIsDrawerOpen={setIsDrawerOpen}
              setContent={setContent}
            />
          ))}
        </div>
      </section>
      <BlogPost
        contentUrl={content ? content : ""}
        open={isDrawerOpen ? true : false}
        setOpen={setIsDrawerOpen}
      />
    </>
  );
}

const Testimonial = ({ testimonial, t, setIsDrawerOpen, setContent }: any) => (
  <div className="rounded-lg border bg-background p-3 pt-0 lg:p-6 shadow-lg hover:shadow-xl grid transition-shadow duration-300 ease-in-out">
    <div>
      <div className="flex relative items-center justify-between my-3">
        <Image
          src={t(`${testimonial}.avatar`)}
          width={40}
          height={40}
          alt={`${t(`${testimonial}.customer`)} Avatar`}
          className="h-10 w-10 rounded-full"
        />
        <Image
          src={t(`${testimonial}.logo`)}
          width={300}
          height={300}
          alt={`${t(`${testimonial}.company`)} Logo`}
          className="w-28 absolute right-0 aspect-square object-contain"
        />
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t(`${testimonial}.customer`)}
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
        &quot;{t(`${testimonial}.text`)}&quot;
      </p>
    </div>
    {t(`${testimonial}.story`) == "true" && (
      <Button
        className="mt-4 justify-self-end self-end"
        onClick={(event) => {
          event.preventDefault(); // prevent default navigation behavior

          setIsDrawerOpen(true);
          setContent(t(`${testimonial}.slug`));
        }}
      >
        Read more
      </Button>
    )}
  </div>
);
