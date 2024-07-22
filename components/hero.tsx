import Link from "next/link";
import { OrbitingCircle } from "./orbitingCircles";
import ShinyButton from "@/components/magicui/shiny-button";
import { useTranslations } from "next-intl";
import LessShinyButton from "./magicui/less-shiny-button";
import information from "@/information.json";
import DotPattern from "./dot-pattern";
import Component from "./component";
export default function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <Component
      title={t("heroTitleStart") + " " + t("heroTitleEnd")}
      description={t("heroText")}
      center
    >
      <div className="button-area">
        <Link
          className="relative buttons"
          href={""}
          data-cal-namespace=""
          data-cal-link={information.calendly}
          data-cal-config='{"layout":"month_view"}'
        >
          <span></span>

          <ShinyButton text={t("scheduleConsultation")} />
        </Link>
        <Link href="#faq" className="buttons">
          <LessShinyButton text={t("learnMore")} />
        </Link>
      </div>
      <DotPattern />
    </Component>
  );
}
