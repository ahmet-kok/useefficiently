import Home from "@/app/[locale]/page";

export default function BlogRedirect() {
  let blogUrl = `https://raw.githubusercontent.com/ahmet-kok/useefficiently/blog`;

  return <Home contentUrl={blogUrl} open={true} />;
}
