import TextReveal from "@/components/magicui/text-reveal";

export async function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] border dark:border-none  dark:[box-shadow:0_-20px_20px_-20px_#ffffff1f_inset] bg-background dark:bg-black">
      <TextReveal text="Magic UI will change the way you design." />
    </div>
  );
}
