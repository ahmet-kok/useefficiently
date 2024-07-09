"use client";
import { useTranslations } from "next-intl";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import LessShinyButton from "@/components/magicui/less-shiny-button";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      /*     cal("floatingButton", {
        calLink: "useefficiently/30min",
        config: { layout: "month_view" },
        hideButtonIcon: false,
        buttonText: "Book a call",
      }); */
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  const t = useTranslations("Contact");
  return (
    <section className=" min-h-[80vh]  ">
      <div className="container min-h-[80vh] items-center mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4 lg:h-[70vh]">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-3">
            {t("description")}
          </p>
          <div className="gap-3 flex sm:max-w-[500px]">
            <Link
              href="mailto:hello@useefficiently.com"
              className="shrink w-full"
            >
              <ShinyButton text="hello@useefficienly.com" />
            </Link>
            <Link
              className="relative shrink w-full"
              href={""}
              data-cal-namespace=""
              data-cal-link="useefficiently/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              <LessShinyButton text={t("scheduleConsultation")} greenIcon/>
            </Link>
          </div>
        </div>
        <div className="flex items-center lg:pb-0 pb-4">
          <iframe
            className={
              "airtable-embed h-[70vh]  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] rounded-lg"
            }
            src="https://airtable.com/embed/appNR1XN7IM5e9g49/pagZ6EQdWEthmLOMQ/form"
            width="100%"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
