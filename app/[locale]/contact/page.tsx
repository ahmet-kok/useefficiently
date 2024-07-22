"use client";
import { useTranslations } from "next-intl";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import LessShinyButton from "@/components/magicui/less-shiny-button";
import information from "@/information.json";
import { useEffect } from "react";
import Component from "@/components/component";

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  const t = useTranslations("Contact");
  return (
    <Component title={t("title")} description={t("description")} center>
      <div className="button-area">
        <Link href={"mailto:" + information.email} className="buttons">
          <ShinyButton text={information.email} />
        </Link>
        <Link
          className="relative buttons"
          href={""}
          data-cal-namespace=""
          data-cal-link={information.calendly}
          data-cal-config='{"layout":"month_view"}'
        >
          <LessShinyButton text={t("scheduleConsultation")} greenIcon />
        </Link>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2  items-center justify-center gap-4 "></div>
      <div className="flex items-center lg:pb-0 pb-4">
        <iframe
          rel="preload"
          className={
            "airtable-embed h-[70vh]  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] rounded-lg"
          }
          src="https://airtable.com/embed/appNR1XN7IM5e9g49/pagZ6EQdWEthmLOMQ/form"
          width="100%"
        ></iframe>
      </div>
    </Component>
  );
}
