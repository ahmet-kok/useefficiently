import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiAirtable, SiMake, SiZapier, SiBrevo } from "react-icons/si";
import Image from "next/image";
import { Block } from "@/components/block";
import TextRotate from "@/components/textRotate";
import { useCases, customers, testimonials } from "@/use";
import partner from "@/public/partner.svg";
import information from "@/information.json";
import { ButtonBlock as Button } from "@/components/button";
import Popover from "@/components/popover";
import { FilloutButton } from "@/components/fillout";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 place-content-between pt-20 items-center justify-center space-y-20">
        <h1 className="text-center text-4xl sm:text-6xl font-medium leading-tight content-center ">
          We assist brands to use technology efficiently
        </h1>
        <div className="text-center space-y-5 font-medium leading-tight text-violet-200">
          {/* <Popover
            title="Airtable"
            description="Airtable is a low-code platform for building collaborative apps."
            position="right"
          >*/}
          <Link
            href={"https://ecosystem.airtable.com/consultants/useefficiently"}
          >
            <Image
              className="mx-auto mb-4 cursor-pointer duration-300 transition-all hover:scale-105"
              src={partner}
              loading="lazy"
              width="250"
              height="250"
              alt="Accredited Airtable Services Partner"
            />
          </Link>
          {/*</Popover> */}
          <h2 className="text-xl sm:text-2xl text-center font-medium leading-tight text-violet-200">
            Accredited Airtable Services Partner
          </h2>
          <div className="flex flex-wrap justify-center text-violet-50 gap-2 sm:w-8/12 mx-auto text-nowrap">
            <FilloutButton className="flex-1 flex gap-1 items-center border border-violet-300 bg-violet-400 p-2 rounded-full px-3 cursor-pointer justify-center">
              <span className="text-xl">Book 30-Minute Free Call</span>
            </FilloutButton>
            <Link
              href={"#about"}
              className="flex flex-1 gap-1 items-center border-zinc-700 bg-zinc-800 border p-2 rounded-full px-3 cursor-pointer text-center justify-center"
            >
              <span className="text-xl">Learn more</span>
            </Link>
          </div>
        </div>
        <Block>
          <div className="flex gap-7 sm:gap-10  items-center justify-center text-4xl sm:text-5xl">
            <span>Use</span>
            <TextRotate text={text}></TextRotate> <span>Efficiently</span>
          </div>
        </Block>
      </div>
      <div className="mb-16" id="about">
        <h2 className="text-3xl sm:text-5xl font-medium leading-tight mb-4 pt-16 text-center">
          Our Airtable Based Solutions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {useCases.map((useCase) => (
            <Button
              key={useCase.title}
              title={useCase.title}
              description={useCase.description}
              link=""
              className={cn(
                useCase.hoverEffect,
                "bg-violet-400 border border-violet-300"
              )}
            >
              <h3 className="text-xl sm:text-2xl font-medium">
                {useCase.title}
              </h3>
            </Button>
          ))}
        </div>
      </div>
      <h2 className="text-3xl sm:text-5xl font-medium leading-tight mb-4 text-center">
        Our Customers and Testimonials
      </h2>
      <div className="grid gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ">
          {customers.map((customer) => (
            <Button
              key={customer.name}
              title={customer.name}
              description={customer.detail ? customer.detail : customer.name}
              link={customer.linkedin}
              className="justify-center flex border border-violet-300 bg-violet-50 items-center"
            >
              <Image
                width={200}
                height={200}
                loading="lazy"
                src={customer.logo}
                alt={customer.name}
              />
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 grid-flow-dense article">
          {testimonials.map((testimonial) => (
            <Button
              className={cn(
                "flex flex-col gap-2 justify-between col-span-2 sm:col-span-1",
                testimonial.span
              )}
              key={testimonial.name}
              title={
                customers.find((x) => x.slug === testimonial.slug)?.name || ""
              }
              description={
                customers.find((x) => x.slug === testimonial.slug)?.detail ||
                testimonial.quote
              }
              link={testimonial.linkedin}
            >
              <article
                className="prose-xl prose-zinc modal bg-zinc-800 prose-p:text-base"
                dangerouslySetInnerHTML={{ __html: testimonial.quote }}
              />

              <Link
                href={testimonial.linkedin}
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  className="aspect-square rounded-full"
                  loading="lazy"
                  width={200}
                  height={200}
                  style={{ width: "70px" }}
                  src={testimonial.pic}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-xl font-medium">{testimonial.name}</h3>
                  <h4 className="text-lg leading-tight text-violet-200">
                    {testimonial.title}
                  </h4>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

const text = [
  <SiAirtable key="Airtable" />,
  <SiZapier key="Zapier" />,
  <SiMake key="Make" />,
  <SiBrevo key="Brevo" />,
];
