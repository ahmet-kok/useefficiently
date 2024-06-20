import Hero from "@/components/hero";
import DotPattern from "@/components/dot-pattern";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StepperSteps from "@/components/stepper-clickable-steps";
import Faq from "@/components/faqq";
import CalCom from "@/components/ui/calcom";

export default function Home({ contentUrl, open }: any) {
  return (
    <>
      <Header />
      <Hero />
      <DotPattern />
      <Testimonials contentSlug={contentUrl} open={open} />
      {/*       <Faq />
       */}{" "}
      {/*       <StepperSteps />
       */}{" "}
      <Faq />
      <Team />
      <Footer />
       <CalCom />
    </>
  );
}
