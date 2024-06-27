import Link from "next/link";
import contents from "@/public/contents/portfolio/contents.json";
import { PortfolioBento } from "@/components/portfolio-bento";
export default function Page() {
  return (
    <section className=" min-h-[80vh] w-full py-12">
      <div className="container mx-auto px-4 md:px-6 2xl:px-0">

      {/* {contents.map((content) => (
        <Link
          className="card"
          key={content.id}
          href={`/portfolio/${content.slug}`}
          passHref
        >
          {content.title}
        </Link>
      ))} */}
      <PortfolioBento contents={contents}/>
      </div>
    </section>
  );
}
