import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ShinyButton from "./magicui/shiny-button";
import { useMessages } from "next-intl";
import MultiStep from "./multi-step";
import { useLocale, useTranslations } from "next-intl";
import { pathnames, locales } from "@/config";

export default function Faq() {
  const t = useTranslations("Faq");
  const messages: any = useMessages();
  const multiStep = messages.Faq.multiStep;
  const localActive = useLocale();

  const pthnames: any = pathnames;
  const lcls: any = locales;
  const usablePathnames = Object.keys(pathnames)
    .filter((key) => !lcls.includes(key))
    .map((key) => {
      return { name: key, slug: pthnames[key] };
    });
  const contactPath = usablePathnames.find((item) => item.name === "/contact");
  const questions: [{ question: string; answer: string }] =
    messages.Faq.questions;
  /*   const multiStep = Object.keys(messages.Faq.multiStep).map((key) => {
    return messages.Faq.multiStep[key];
  });
 */
  return (
    <section className="w-full  py-12 md:py-24 min-h-[80vh]">
      <div className="container mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-3">
            {t("description")}
          </p>
          <div className="flex gap-3 w-full sm:max-w-[500px] ">
            <Link
              href={
                (localActive === "en" ? "" : "/" + localActive) +
                contactPath?.slug[localActive]
              }
              className="shrink w-full"
            >
              <ShinyButton text={t(contactPath?.name.replace("/", ""))} />
            </Link>
            <MultiStep
              text={t("ourProcess")}
              states={multiStep}
              className="shrink w-full"
            />
          </div>
        </div>

        <Accordion type="single" collapsible className="AccordionRoot">
          {questions.map(({ question, answer }, key) => (
            <AccordionItem
              key={key}
              value={question}
              /*               className=
               */ className={cn(
                " px-4 mb-3 p-3  grid",
                "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)]  dark:border-none  dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                "group     overflow-hidden rounded-lg"
              )}
            >
              <AccordionTrigger className="text-left  hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
