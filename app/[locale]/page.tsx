import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import dynamic from "next/dynamic";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Benefits from "@/components/benefits";
const CalCom = dynamic(() => import("@/components/ui/calcom"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Faq />
      <CalCom />
    </>
  );
}
