export default function PhotoPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <div className="card">{slug}</div>;
}
