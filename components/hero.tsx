import Link from "next/link";
import { OrbitingCircle } from "./orbitingCircles";
import ShinyButton from "@/components/magicui/shiny-button";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container items-center mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl lg:text-6xl leading-tight">
            {t("heroTitleStart")}
            <span className="animate-textGradient bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text  text-transparent">
              {" Airtable "}
             
            </span>
            {t("heroTitleEnd")}
          </h1>
          <p className="max-w-[600px] text-gray-700 dark:text-gray-200 md:text-xl leading-relaxed lg:text-lg xl:text-xl">
            {t("heroText")}
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="#">
              <ShinyButton text={t("scheduleConsultation")} />
            </Link>

            <Button className="rounded-lg px-6 ">
              <Link href="#">{t("learnMore")}</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-xl w-full h-full">
            <OrbitingCircle />
          </div>
        </div>
      </div>
    </section>
  );
}
