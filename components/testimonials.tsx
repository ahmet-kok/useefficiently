"use client";

import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedLogoCloud from "./logocloud";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import dynamic from "next/dynamic";
const CustomerStoriesPost = dynamic(
  () => import("@/components/customer-stories-post"),
  {
    ssr: false,
  }
);
import Link from "next/link";
import Section from "@/components/section";
export default function Testimonials() {
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
    <Section
      id="testimonials"
      title={t("ClientTestimonials.subtitle")}
      description={t("ClientTestimonials.description")}
    >
      {/*       <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t("ClientTestimonials.subtitle")}
        </h2>
        <p className="paragraph">
          {t("ClientTestimonials.description")}
        </p>
      </div> */}
      <AnimatedLogoCloud animated={false} />
      <div className=" grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
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
        <CustomerStoriesPost
          slug={content ? content : ""}
          open={isDrawerOpen ? true : false}
          setOpen={setIsDrawerOpen}
        />
      )}
    </Section>
  );
}

const Testimonial = ({ testimonial, t, setIsDrawerOpen, setContent }: any) => (
  <div className={" p-4 pt-0 lg:p-6 grid group cards text-start"}>
    <div>
      <div className="flex relative items-center justify-between my-4">
        <Image
          src={t(`${testimonial}.avatar`)}
          width={30}
          height={30}
          alt={`${t(`${testimonial}.customer`)} Avatar`}
          className="h-14 w-max rounded-full"
        />
        <Image
          src={t(`${testimonial}.logo`)}
          width={0}
          height={0}
          alt={`${t(`${testimonial}.company`)} Logo`}
          className="max-h-10 max-w-40 w-auto right-0 dark:brightness-0  dark:invert"
        />
      </div>

      <h5 className="text-xl">{t(`${testimonial}.customer`)}</h5>

      <p className="mt-4 ">&quot;{t(`${testimonial}.text`)}&quot;</p>
    </div>
    {t(`${testimonial}.story`) == "true" && (
      <Button
        variant="ghost"
        asChild
        className="pointer-events-auto mt-4 justify-self-end self-end"
        onClick={(event) => {
          event.preventDefault(); // prevent default navigation behavior

          setIsDrawerOpen(true);
          setContent(t(`${testimonial}.slug`));
        }}
      >
        <Link href={`/customer-stories/${t(`${testimonial}.slug`)}`}>
          {"Learn more"}
          <span className="sr-only">about {t(`${testimonial}.company`)}</span>
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    )}
    <div className="card-hover" />
  </div>
);
