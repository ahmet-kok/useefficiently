import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import dynamic from "next/dynamic";
import Faq from "@/components/faq";
import Features from "@/components/features";
const CalCom = dynamic(() => import("@/components/ui/calcom"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Faq />

      <CalCom />
    </>
  );
}
