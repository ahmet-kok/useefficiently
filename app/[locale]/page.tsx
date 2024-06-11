import Hero from "@/components/hero";
//import TextReveal from "@/components/magicui/text-reveal";
import DotPattern from "@/components/dot-pattern";
//import GridPattern from "@/components/magicui/animated-grid-pattern";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <DotPattern />
      <Testimonials />
      <Team />
      <Footer />
    </>
  );
}
