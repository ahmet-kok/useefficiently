"use client";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import dynamic from "next/dynamic";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Benefits from "@/components/benefits";
import information from "@/information.json";
const CalCom = dynamic(() => import("@/components/ui/calcom"), {
  ssr: false,
});
import useMetadata from "@/hooks/useMetadata";
export default function Home() {
  useMetadata("Home - UseEfficiently", information.description);

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
