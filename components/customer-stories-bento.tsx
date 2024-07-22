import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

interface Item {
  name: string;
  description: string;
  icon?: string;
  color: string;
  time: string;
}

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

export function CustomerStoriesBento({ contents }: { contents: any[] }) {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard
          key={idx}
          {...feature}
          href={
            contents[idx]?.slug
              ? `/customer-stories/${contents[idx].slug}`
              : "#"
          }
        />
      ))}
    </BentoGrid>
  );
}
