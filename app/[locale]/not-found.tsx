import DotPattern from "@/components/dot-pattern";
import { Button } from "@/components/ui/button";
import CalCom from "@/components/ui/calcom";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import LessShinyButton from "@/components/magicui/less-shiny-button";
import information from "@/information.json";
import Component from "@/components/component";
export default function NotFound() {
  const t = useTranslations("404");
  const localActive = useLocale();
  return (
    <Component title={t("title")} description={t("description")} center>
      <CalCom />
      <div className="flex  justify-center ">
        <div className="flex gap-3 w-full sm:max-w-[500px]">
          <Link
            href={localActive === "en" ? "/" : "/" + localActive}
            className="buttons"
          >
            <ShinyButton text={t("returnHome")} />
          </Link>
          <Link
            className="relative buttons"
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
    </Component>
  );
}
