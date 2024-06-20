import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import HighlightComponent from "./herohighlight";
import Link from "next/link";
import ShinyButton from "./magicui/shiny-button";
import { useTranslations } from "next-intl";
import { MultiStepLoaderDemo } from "./multi-step";
interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is this template free?",
    answer: "Yes. It is a free Shadcn/Vue template.",
    value: "item-1",
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam consectetur sapiente, iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-2",
  },
  {
    question:
      "Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.",
    value: "item-3",
  },
  {
    question: "Excepteur sint occaecat cupidata non proident sunt?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    value: "item-4",
  },
  {
    question:
      "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
    answer: "consectetur adipisicing elit. Sint labore.",
    value: "item-5",
  },
];

export default function Faq() {
  const t = useTranslations("Team");
  return (
    <section id="faq" className="w-full  py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <Badge variant="outline">{t("title")}</Badge>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-3">
            {t("description")}
          </p>
          <div className="gap-3 flex">
            <MultiStepLoaderDemo
              states={[
                {
                  text: "Buying a condo",
                },
                {
                  text: "Travelling in a flight",
                },
                {
                  text: "Meeting Tyler Durden",
                },
                {
                  text: "He makes soap",
                },
                {
                  text: "We goto a bar",
                },
                {
                  text: "Start a fight",
                },
                {
                  text: "We like it",
                },
                {
                  text: "Welcome to F**** C***",
                },
              ]}
            />
            <Link href="mailto:hello@useefficiently.com">
              <ShinyButton text="hello@useefficienly.com" />
            </Link>
          </div>
        </div>

        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem
              key={value}
              value={value}
              className=" px-4 mb-3 rounded-lg border bg-background p-3 shadow-lg hover:shadow-xl grid transition-shadow duration-300 ease-in-out"
            >
              <AccordionTrigger className="text-left  hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
