import { useTranslations } from "next-intl";
import CalCom from "@/components/ui/calcom";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
import information from "@/information.json";
import Section from "@/components/section";
import OrbitingCircle from "@/components/orbitingCircles";
import { useLocale } from "next-intl";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "404 Not Found";
  const description = "The page you are looking for does not exist.";

  const metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: information.website,
      type: "website",
      images: [
        {
          url: information.website + "/api/og?title=" + title,
          alt: information.company + " Logo",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@" + information.slug,
      title: title,
      description: description,
      images: information.website + "/api/og?title=" + title,
    },
  };

  return metadata;
}

export default function NotFound() {
  const t = useTranslations("404");
  const localActive = useLocale();
  return (
    <Section title={t("title")} description={t("description")} center>
      <div className="button-area">
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
          <ShinyButton dark text={t("scheduleConsultation")} greenIcon />
        </Link>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2  items-center justify-center gap-4 "></div>
      <OrbitingCircle />
      <CalCom />
    </Section>
  );
}
