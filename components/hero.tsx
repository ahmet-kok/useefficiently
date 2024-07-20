import Link from "next/link";
import { OrbitingCircle } from "./orbitingCircles";
import ShinyButton from "@/components/magicui/shiny-button";
import { useTranslations } from "next-intl";
import LessShinyButton from "./magicui/less-shiny-button";
import information from "@/information.json";
import DotPattern from "./dot-pattern";
export default function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <>
        <div className="text-center space-y-10">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            {t("heroTitleStart")}
            {/*             <span className="animate-textGradient bg-gradient-to-r from-red-500 via-yellow-500 to-sky-500 bg-clip-text text-transparent">
             */}{" "}
            {"Airtable "}
            {/*             </span>
             */}{" "}
            {t("heroTitleEnd")}
          </h1>
          <p className="max-w-[800px] mx-auto  text-gray-700 dark:text-gray-200 md:text-xl leading-relaxed lg:text-lg xl:text-xl">
            {t("heroText")}
          </p>
          <div className="flex gap-3 w-full mx-auto sm:max-w-[500px] ">
            <Link
              className="relative shrink w-full"
              href={""}
              data-cal-namespace=""
              data-cal-link={information.calendly}
              data-cal-config='{"layout":"month_view"}'
            >
              <span className="top-[-8px] right-[-8px] absolute z-50  w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>

              <ShinyButton text={t("scheduleConsultation")} />
            </Link>
            <Link href="#faq" className="shrink w-full">
              <LessShinyButton text={t("learnMore")} />
            </Link>
          </div>
          <DotPattern />

        </div>
      {/* <div className="flex justify-center items-center">
          <div className="rounded-lg w-full h-full">
            <OrbitingCircle />
          </div>
        </div> */}
    </>
  );
}
