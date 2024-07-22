import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import dynamic from "next/dynamic";
import Faq from "@/components/faq";
import Orbit from "@/components/orbit";

const CalCom = dynamic(() => import("@/components/ui/calcom"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Testimonials />
      <Orbit />
      <Faq />
      <CalCom />
    </div>
  );
}
