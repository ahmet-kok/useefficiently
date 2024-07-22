import { CustomerStoriesText } from "@/components/customer-stories-text-render";

export default function PhotoPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <CustomerStoriesText slug={slug} />;
}
