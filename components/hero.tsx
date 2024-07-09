import Link from "next/link";
import { OrbitingCircle } from "./orbitingCircles";
import ShinyButton from "@/components/magicui/shiny-button";
import { useTranslations } from "next-intl";
import LessShinyButton from "./magicui/less-shiny-button";

export default function HeroSection({ id }: { id: string }) {
  const t = useTranslations("Hero");
  return (
    <section className="w-full py-12" id={id}>
      <div className="container items-center mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl lg:text-6xl leading-tight">
            {t("heroTitleStart")}
            {/*             <span className="animate-textGradient bg-gradient-to-r from-red-500 via-yellow-500 to-sky-500 bg-clip-text text-transparent">
             */}{" "}
            {" Airtable "}
            {/*             </span>
             */}{" "}
            {t("heroTitleEnd")}
          </h1>
          <p className="max-w-[600px] text-gray-700 dark:text-gray-200 md:text-xl leading-relaxed lg:text-lg xl:text-xl">
            {t("heroText")}
          </p>
          <div className="flex gap-3 w-full sm:max-w-[500px] ">
            <Link
              className="relative shrink w-full"
              href={""}
              data-cal-namespace=""
              data-cal-link="useefficiently/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              <span className="top-[-8px] right-[-8px] absolute z-50  w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>

              <ShinyButton text={t("scheduleConsultation")} />
            </Link>
            <Link href="#faq" className="shrink w-full">
              <LessShinyButton text={t("learnMore")} />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-lg w-full h-full">
            <OrbitingCircle />
          </div>
        </div>
      </div>
    </section>
  );
}
