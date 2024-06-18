import Hero from "@/components/hero";
import DotPattern from "@/components/dot-pattern";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Faq from "@/components/faq";
import StepperSteps from "@/components/stepper-clickable-steps";

export default function Home({ contentUrl, open }: any) {
  return (
    <>
      <Header />
      <Hero />
      <DotPattern />
      <Testimonials contentSlug={contentUrl} open={open} />
      <Faq />
{/*       <StepperSteps />
 */}      <Team />
      <Footer />
    </>
  );
}
