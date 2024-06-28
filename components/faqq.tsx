import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
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
    question: "What is a no-code platform?",
    answer:
      "A no-code platform allows users to build applications without writing any code. It uses visual development tools to create and manage applications.",
    value: "item-1",
  },
  {
    question: "How can no-code solutions benefit my business?",
    answer:
      "No-code solutions can significantly reduce development time and costs, allowing for rapid prototyping and deployment. They enable business users to create and modify applications without needing technical expertise.",
    value: "item-2",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including consultancy, solution design, development, testing, deployment, user training, and ongoing support for no-code platforms.",
    value: "item-3",
  },
  {
    question: "Which no-code platforms do you work with?",
    answer:
      "We work with a variety of no-code platforms including Airtable, Zapier, Bubble, Adalo, and more.",
    value: "item-4",
  },
  {
    question: "How secure are no-code applications?",
    answer:
      "No-code platforms typically follow industry-standard security practices. We also ensure that security is a top priority in all our development projects, including data encryption, access control, and regular security audits.",
    value: "item-5",
  },
  {
    question: "Can you integrate no-code solutions with existing systems?",
    answer:
      "Yes, we can integrate no-code solutions with existing systems using APIs and other integration tools to ensure seamless data flow and functionality.",
    value: "item-6",
  },
  {
    question: "Do you provide training for using no-code platforms?",
    answer:
      "Absolutely. We offer comprehensive training sessions for your team to ensure they can effectively use and manage the no-code solutions we develop for you.",
    value: "item-7",
  },
];

export default function Faq({id}: {id: string}) {
  const t = useTranslations("Faq");
  return (
    <section id={id} className="w-full  py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <Badge variant="outline">{t("title")}</Badge>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-3">
            {t("description")}
          </p>
          <div className="gap-3 flex flex-wrap">
            <Link href="mailto:hello@useefficiently.com">
              <ShinyButton text="hello@useefficienly.com" />
            </Link>
            <MultiStepLoaderDemo
              states={[
                {
                  text: "Initial Consultation",
                },
                {
                  text: "Requirement Analysis",
                },
                {
                  text: "Solution Design",
                },
                {
                  text: "Development and Testing",
                },
                {
                  text: "Deployment",
                },
                {
                  text: "User Training",
                },
                {
                  text: "Ongoing Support",
                },
                {
                  text: "Continuous Improvement",
                },
              ]}
            />
          </div>
        </div>

        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map(({ question, answer, value }, key) => (
            <AccordionItem
              key={key}
              value={value}
              /*               className=
               */ className={cn(
                " px-4 mb-3 p-3  grid",
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                "group     overflow-hidden rounded-lg",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
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
