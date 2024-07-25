import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";
import { ReactNode } from "react";
import { AirtableIcon, SoftrIcon } from "@/components/icons";
import { FC } from "react";

type IconName = "AirtableIcon" | "SoftrIcon";
type cardSize = "sm" | "md" | "lg";
const iconMapping: Record<IconName, FC<{ className?: string }>> = {
  AirtableIcon,
  SoftrIcon,
  // Add more icons as needed
};
interface SocialIconProps {
  iconName: IconName;
  className?: string;
}


const SocialIcon: FC<SocialIconProps> = ({
  iconName,
  className,
}: {
  iconName: IconName;
  className?: string;
}) => {
  const IconComponent = iconMapping[iconName];

  return <IconComponent className={className} />;
};
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
  title,
  className,
  description,
  href,
  size,
  icons,
}: {
  title: string;
  className: Array<string>;
  description: string;
  href: string;
  size: cardSize;
  icons: Array<React.ReactNode>;
}) => (
  <div
    key={title}
    className={cn(
      "group flex relative flex-col justify-between cards text-start p-6 col-span-3",
      size === "sm" ? "lg:col-span-1" : size === "md" ? "lg:col-span-2" : "lg:col-span-3",
    )}
  >
    <div className="flex gap-5">
      {icons
        ? icons.map((icon, index) => (
            <div className="bordor-color rounded-lg h-[60px] flex items-center" key={index}>
              <SocialIcon
                iconName={icon as IconName}
                className="h-full p-4"
              />
            </div>
          ))
        : null}{" "}
    </div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 group-hover:-translate-y-10">
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p className="max-w-lg ">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <Link href={href}>
          Learn more
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
    <div className="card-hover" />
  </div>
);

export { BentoCard, BentoGrid };
