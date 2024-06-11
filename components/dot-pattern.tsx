import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import WordRotate from "@/components/magicui/word-rotate";

export default function DotPatternDemo() {
  return (
    <section className="w-full h-[150px] container px-4 md:px-6 2xl:px-0  mb-6 md:mb-12 lg:mb-16 xl:mb-20">
      {/*       overflow-hidden  p-10 md:shadow-xl container  mx-auto mx-4 px-4 md:px-6 2xl:px-0
       */}{" "}
      <div
        className="relative 	 flex h-full items-center text-4xl sm:text-5xl justify-items-stretch rounded-lg border bg-background  md:shadow-xl gap-3 "
      >
        <p className="z-10 translate-x-6 text-nowrap whitespace-pre-wrap   font-medium tracking-tighter text-black dark:text-white text-end  w-full">
          Use Efficiently
        </p>
        <div className="z-10  translate-x-6  whitespace-pre-wrap  font-medium tracking-tighter text-black dark:text-white justify-self-start w-full">
          <WordRotate
            words={["Airtable", "Softr", "Make", "Zapier"]}
          />
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </section>
  );
}
