import DotPattern from "@/components/dot-pattern";
import { Button } from "@/components/ui/button";
import CalCom from "@/components/ui/calcom";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import LessShinyButton from "@/components/magicui/less-shiny-button";
import information from "@/information.json";

export default function NotFound() {
  const t = useTranslations("404");
  const localActive = useLocale();
  return (
    <div className="flex justify-center items-center container min-h-[80vh]  mx-auto px-4 md:px-6 2xl:px-0 ">
      <div className="text-center w-full space-y-5">
        <h1 className="text-4xl  font-bold dark:text-gray-200">
          {t("title")}
        </h1>
        <p className="text-2xl  dark:text-gray-400">{t("description")}</p>
        <CalCom />
        <div className="flex  justify-center ">
          <div className="flex gap-3 w-full sm:max-w-[500px]">
            <Link
              href={localActive === "en" ? "/" : "/" + localActive}
              className="shrink w-full"
            >
              <ShinyButton text={t("returnHome")} />
            </Link>
            <Link
              className="relative shrink w-full"
              href={""}
              data-cal-namespace=""
              data-cal-link={information.calendly}
              data-cal-config='{"layout":"month_view"}'
            >
              <LessShinyButton text={t("bookACall")} />
            </Link>
          </div>
        </div>

        <DotPattern />
      </div>
    </div>
  );
}
