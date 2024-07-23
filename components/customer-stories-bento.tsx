import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

export function CustomerStoriesBento({ contents }: { contents: any[] }) {
  console.log(contents);
  return (
    <BentoGrid>
      {contents.map((feature, idx) => (
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
