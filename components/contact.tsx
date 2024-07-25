import { useTranslations } from "next-intl";
import CalCom from "@/components/ui/calcom";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import information from "@/information.json";
import Section from "@/components/section";
import OrbitingCircle from "@/components/orbitingCircles";

export default function Contact({ page }: { page?: boolean }) {
  const t = useTranslations("Contact");
  return (
    <Section title={t("title")} description={t("description")} center h1={page}>
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
          <ShinyButton text={t("scheduleConsultation")} greenIcon dark />
        </Link>
      </div>
      <OrbitingCircle />
      <CalCom />
    </Section>
  );
}
