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
import Section from "./section";

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

  return (
    <Section title={t("subtitle")} description={t("description")}>
      <div className="button-area ">
        <Link
          href={
            (localActive === "en" ? "" : "/" + localActive) +
            contactPath?.slug[localActive]
          }
          className="buttons"
        >
          <ShinyButton text={t(contactPath?.name.replace("/", ""))}/>
        </Link>
        <MultiStep
          text={t("ourProcess")}
          states={multiStep}
          className="buttons"
        />
      </div>
      <div>

      <Accordion type="single" collapsible className="max-w-[800px] mx-auto">
        {questions.map(({ question, answer }, key) => (
          <AccordionItem
            key={key}
            value={question}
            className={"cards px-4 mb-3 p-3 grid  "}
          >
            <AccordionTrigger className="hover:no-underline  ">
              <h6>{question}</h6>
            </AccordionTrigger>
            <AccordionContent className="text-base text-start">
              {answer}
            </AccordionContent>
            <div className="card-hover" />
          </AccordionItem>
        ))}
      </Accordion>
      
      </div>
    </Section>
  );
}
