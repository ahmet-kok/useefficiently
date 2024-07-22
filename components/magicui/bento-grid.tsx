import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";
import { ReactNode } from "react";
import Link from "next/link";
const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[21rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group flex relative col-span-3 flex-col justify-between cards text-start",

      className
    )}
  >
    <div></div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">

      <h3 className="text-xl font-semibold ">
        {name}
      </h3>
      <p className="max-w-lg ">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <Link href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
    <div className="card-hover" />
  </div>
);

export { BentoCard, BentoGrid };
