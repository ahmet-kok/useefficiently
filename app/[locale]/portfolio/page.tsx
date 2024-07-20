import contents from "@/public/contents/portfolio/contents.json";
import { PortfolioBento } from "@/components/portfolio-bento";
export default function Page() {
  return (
    <div className="container min-h-[80vh] w-full mx-auto px-4 md:px-6 2xl:px-0">
      <PortfolioBento contents={contents} />
    </div>
  );
}
