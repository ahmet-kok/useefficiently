import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import WordRotate from "@/components/magicui/word-rotate";

export default function DotPatternDemo() {
  return (
    <section className="w-full h-[150px] container px-4 md:px-6 2xl:px-0">
      {/*       overflow-hidden  p-10 md:shadow-xl container  mx-auto mx-4 px-4 md:px-6 2xl:px-0
       */}{" "}
      <div className="relative flex h-full items-center justify-items-stretch rounded-lg border bg-background  md:shadow-xl gap-8 ">
        <p className="z-10 whitespace-pre-wrap text-4xl md:text-5xl  font-medium tracking-tighter text-black dark:text-white text-end  w-full">
          Use Efficently
        </p>
        <div className="z-10 whitespace-pre-wrap text-4xl md:text-5xl font-medium tracking-tighter text-black dark:text-white justify-self-start w-full">
          <WordRotate
            words={["Airtable", "Softr", "Make", "Zapier"]}
            duration={2000}
          />
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </section>
  );
}
