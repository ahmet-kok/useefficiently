import { PortfolioText } from "@/components/portfolio-text-render";

export default function PhotoPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <PortfolioText slug={slug} />;
}
