import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import dynamic from "next/dynamic";
const CalCom = dynamic(() => import("@/components/ui/calcom"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 2xl:px-0 space-y-10">
        <Hero />
        <Testimonials id="testimonials" />
      </div>
      <CalCom />
    </>
  );
}
