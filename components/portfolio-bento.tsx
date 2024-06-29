import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

interface Item {
  name: string;
  description: string;
  icon?: string;
  color: string;
  time: string;
}

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const features = [
  {
    name: "PublicSquare",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
  },

  {
    name: "Turkish Entrepreneurship Foundation",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Google Game and Application Academy",
    description: "Supports 100+ integrations and counting.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "YetGen",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-2",
    href: "/",
    cta: "Learn more",
  },
];

export function PortfolioBento({ contents }: { contents: any[] }) {
  return (
    <>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard
            key={idx}
            {...feature}
            href={
              contents[idx]?.slug ? `/portfolio/${contents[idx].slug}` : "#"
            }
          />
        ))}
      </BentoGrid>
    </>
  );
}
