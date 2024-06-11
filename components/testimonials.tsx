import { Badge } from "@/components/ui/badge";
import { Console } from "console";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const messages = useMessages();
  const testimonials = Object.keys(messages["Testimonials"]);
  testimonials.pop();

  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20">
      <div className="space-y-4 container px-4md:px-6   2xl:px-0 pb-8 lg:gap-8">
        <Badge variant="outline">{t("ClientTestimonials.title")}</Badge>

        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t("ClientTestimonials.subtitle")}
        </h2>
        <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {t("ClientTestimonials.description")}
        </p>
      </div>
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6  mx-auto 2xl:px-0  lg:gap-8">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial} testimonial={testimonial} t={t} />
        ))}
      </div>
    </section>
  );
}

const Testimonial = ({ testimonial, t }: any) => (
  <div className="rounded-lg border bg-background p-6 shadow-lg">
    <div className="flex items-center justify-between">
      <Image
        src={t(`${testimonial}.logo`)}
        width={100}
        height={50}
        alt={`${t(`${testimonial}.company`)} Logo`}
        className="h-8 w-auto"
      />
      <Image
        src={t(`${testimonial}.avatar`)}
        width={40}
        height={40}
        alt={`${t(`${testimonial}.customer`)} Avatar`}
        className="h-10 w-10 rounded-full"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-semibold">{t(`${testimonial}.company`)}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {t(`${testimonial}.customer`)}
      </p>
    </div>
    <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
      &quot;{t(`${testimonial}.text`)}&quot;
    </p>
  </div>
);

/* 
const testimonials = [
  {
    company: "Turkish Entrepreneurship Foundation",
    customer: "John Doe",
    logo: "/placeholder.svg",
    avatar: "/placeholder.svg",
    text: "The customer service I received was exceptional. The support team went above and beyond to address my concerns.",
  },
  {
    company: "PublicSquare",
    customer: "Jane Smith",
    logo: "/placeholder.svg",
    avatar: "/placeholder.svg",
    text: "Absolutely amazing experience! The team was very supportive and the product quality exceeded my expectations.",
  },
  {
    company: "YetGen",
    customer: "Alice Johnson",
    logo: "/placeholder.svg",
    avatar: "/placeholder.svg",
    text: "I am extremely satisfied with the service. The responsiveness and professionalism were top-notch. ",
  },
];
 */
