import Link from "next/link";
import OrbitingCircle from "./orbitingCircles";
import ShinyButton from "@/components/magicui/shiny-button";
import { useTranslations } from "next-intl";
import information from "@/information.json";
import DotPattern from "./dot-pattern";
import Section from "@/components/section";
export default function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <Section
      title={t("heroTitleStart") + " " + t("heroTitleEnd")}
      description={t("heroText")}
      center
      h1
    >
      <div className="button-area">
        <Link
          className="relative buttons"
          href={""}
          data-cal-namespace=""
          data-cal-link={information.calendly}
          data-cal-config='{"layout":"month_view"}'
        >
          <ShinyButton greenIcon text={t("scheduleConsultation")} />
        </Link>
        <Link href="#testimonials" className="buttons">
          <ShinyButton dark text={t("learnMore")} />
        </Link>
      </div>
      <DotPattern />
    </Section>
  );
}
