import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import WordRotate from "@/components/magicui/word-rotate";
import Image from "next/image";
import {
  AirtableIcon,
  BubbleDarkIcon,
  BubbleLightIcon,
  SoftrIcon,
} from "./icons";
import information from "@/information.json";

export default function DotPatternDemo() {
  return (
    <>
      <div className=" h-[150px] cards">
        <div className="self-center flex w-full max-w-[600px] mx-auto h-full py-5 px-4 text-[2.2rem] sm:text-5xl text-nowrap whitespace-pre-wrap font-medium tracking-tighter dark:text-white z-40">
          <div className="z-40 flex gap-3 justify-between items-center">
            <span>{information.firstPart}</span>

            <WordRotate
              className="w-full"
              words={[
                AirtableIcon({ className: "w-full" }),
                Icons.make({ className: "w-full" }),
                SoftrIcon({ className: " w-full" }),
                Icons.bubble(),
              ]}
            />
            <span>{information.secondPart}</span>
          </div>
        </div>
        <DotPattern
          className={
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          }
        />
      </div>
    </>
  );
}

const Icons = {
  make: (props: any) => (
    <>
      <Image
        src="/make-dark.svg"
        className="dark:hidden"
        width={400}
        height={400}
        alt="Make.com"
      />
      <Image
        src="/make-light.svg"
        className="hidden dark:inline-block"
        width={400}
        height={400}
        alt="Make.com"
      />
    </>
  ),
  bubble: () => (
    <>
      <BubbleDarkIcon className="dark:hidden w-full" />
      <BubbleLightIcon className="hidden dark:inline-block w-full" />
    </>
  ),
};
