import Home from "../page";

export default function Portfolio({
  params: { portfolio },
}: {
  params: { portfolio: string };
}) {
  if (portfolio === "arcelik") {
    return (
      <Home
        contentUrl="https://raw.githubusercontent.com/ahmet-kok/ReDoMusic/main/README.md"
        open={true}
      />
    );
  } else if (portfolio === "trendyol") {
    return (
      <Home
        contentUrl="https://raw.githubusercontent.com/nazlicansahin/Login-Page/main/README.md"
        open={true}
      />
    );
  }
}
