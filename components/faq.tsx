import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
import ShinyButton from "./magicui/shiny-button";
import { useMessages } from "next-intl";
import MultiStep from "./multi-step";
import { useLocale, useTranslations } from "next-intl";
import { pathnames, locales } from "@/config";
import Component from "./component";

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
    <Component title={t("subtitle")} description={t("description")}>
      <div className="button-area ">
        <Link
          href={
            (localActive === "en" ? "" : "/" + localActive) +
            contactPath?.slug[localActive]
          }
          className="buttons"
        >
          <ShinyButton text={t(contactPath?.name.replace("/", ""))} />
        </Link>
        <MultiStep
          text={t("ourProcess")}
          states={multiStep}
          className="buttons"
        />
      </div>
      <Accordion type="single" collapsible className="max-w-[800px] mx-auto">
        {questions.map(({ question, answer }, key) => (
          <AccordionItem
            key={key}
            value={question}
            className={"cards px-4 mb-3 p-3 grid  "}
          >
            <AccordionTrigger className="hover:no-underline text-lg text-start">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-start">
              {answer}
            </AccordionContent>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
          </AccordionItem>
        ))}
      </Accordion>
    </Component>
  );
}
