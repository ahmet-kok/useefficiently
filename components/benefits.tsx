import { useTranslations } from "next-intl";

import Section from "@/components/section";
import OrbitingCircle from "@/components/orbitingCircles";
import BenefitCards from "@/components/benefit-cards";

export default function Benefits() {
  const t = useTranslations("Benefits");
  return (
    <Section title={t("title")}>
        <BenefitCards />
        <OrbitingCircle />
    </Section>
  );
}
