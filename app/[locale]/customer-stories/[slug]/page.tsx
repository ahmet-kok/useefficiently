import { CustomerStoriesText } from "@/components/customer-stories-text-render";
import CalCom from "@/components/ui/calcom";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import information from "@/information.json";
import OrbitingCircle from "@/components/orbitingCircles";
import Section from "@/components/section";
import { useTranslations } from "next-intl";

export default function CustomerStory({
  params: { slug },
}: {
  params: { slug: string; title: string; description: string };
}) {
  const t = useTranslations("Contact");

  return (
    <>
      <CalCom />
      <CustomerStoriesText slug={slug} />
      <Section title={t("title")} description={t("description")}>
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
    </>
  );
}
