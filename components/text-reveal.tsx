import TextReveal from "@/components/magicui/text-reveal";

export async function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center cards">
      <TextReveal text="Magic UI will change the way you design." />
    </div>
  );
}
