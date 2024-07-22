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
      <div className=" h-[150px]  cards">
        <div className="self-center flex w-full max-w-[600px] mx-auto h-full py-5 ">
          <p className="text-[2rem] sm:text-5xl z-10  text-nowrap whitespace-pre-wrap  font-medium tracking-tighter self-center  p-1  dark:text-white border-bottom text-end w-[50%] sm:text-end sm:w-full">
            {information.firstPart}
          </p>
          <div className="z-10  mx-3  whitespace-pre-wrap  font-medium tracking-tighter  dark:text-white  self-center text-center w-full">
            <WordRotate
              words={[
                AirtableIcon({ className: "w-full" }),
                Icons.make({ className: "w-full" }),
                SoftrIcon({ className: " w-full" }),
                Icons.bubble(),
              ]}
            />
          </div>
          <p className="text-[2rem] sm:text-5xl z-10 text-nowrap whitespace-pre-wrap   font-medium tracking-tighter self-center  p-1  dark:text-white text-start  w-full">
            {information.secondPart}
          </p>
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
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
        width={200}
        height={200}
        alt="Make.com"
      />
      <Image
        src="/make-light.svg"
        className="hidden dark:inline-block"
        width={200}
        height={200}
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
