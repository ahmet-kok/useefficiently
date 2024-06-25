import Link from "next/link";
import contents from "@/public/contents/portfolio/contents.json";
export default function Page() {
  return (
    <section className="cards-container">
      {contents.map((content) => (
        <Link
          className="card"
          key={content.id}
          href={`/portfolio/${content.slug}`}
          passHref
        >
          {content.title}
        </Link>
      ))}
    </section>
  );
}
