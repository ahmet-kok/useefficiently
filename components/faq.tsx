import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ShinyButton from "@/components/magicui/shiny-button";
export default function Faq() {
  const t = useTranslations("Team");

  const localActive = useLocale();
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20">
      <div className="space-y-4 container px-4 md:px-6   2xl:px-0 pb-8 lg:gap-8">
        <Badge className="text-sm font-light" variant="outline">{t("title")}</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t("subtitle")}
        </h2>
        <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {t("description")}
        </p>
      </div>
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6  mx-auto 2xl:px-0  lg:gap-8">
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
            <svg
              data-v-e8d572f6=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-lg font-semibold">
            Is there a free trial available?
          </p>
          <p className="mt-2 text-muted-foreground">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
      </div>
      <div className="  mt-16 container mx-auto px-4 md:px-6">
        <div className="flex w-full flex-col gap-6  p-8 py-8 items-center rounded-lg bg-muted/50 justify-between text-center dark:bg-muted/20 lg:flex-row lg:text-left lg:gap-8">
          <div>
            <p className="mb-3 text-lg font-semibold">Still have questions?</p>
            <p className="text-muted-foreground">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          {/*  <button
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="button"
        >
          Get in touch
        </button> */}
          <Link href="mailto:hello@useefficiently.com">
            <ShinyButton text="hello@useefficienly.com" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 
<Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */
