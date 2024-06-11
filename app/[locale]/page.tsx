import Hero from "@/components/hero";
import Main from "@/components/main";
//import TextReveal from "@/components/magicui/text-reveal";
import DotPattern from "@/components/dot-pattern";
import { useTranslations } from "next-intl";
//import GridPattern from "@/components/magicui/animated-grid-pattern";
//import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
export default function Index() {
  const t = useTranslations("Index");
  return (
    <div>
      <Hero />
      <DotPattern />
      {/* <Testimonials /> */}
      <Team />
{/*       <Main />
 */}    </div>
  );
}
