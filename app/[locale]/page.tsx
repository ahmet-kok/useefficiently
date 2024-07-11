import Hero from "@/components/hero";
import DotPattern from "@/components/dot-pattern";
import Testimonials from "@/components/testimonials";
import dynamic from "next/dynamic";
const CalCom = dynamic(() => import("@/components/ui/calcom"), {
  ssr: false,
});
const Faq = dynamic(() => import("@/components/faqq"), {
  ssr: false,
});

export default function Home({ contentUrl, open }: any) {
  return (
    <>
      <Hero id="hero" />
      <Testimonials id="testimonials" contentSlug={contentUrl} open={open} />
      <div className="  container mx-auto px-4 md:px-6 2xl:px-0">
        <DotPattern />
      </div>
      <CalCom />
    </>
  );
}
