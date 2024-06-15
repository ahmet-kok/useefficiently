"use client";

import { usePathname } from "next/navigation";
import Home from "@/app/[locale]/page";

export default function BlogRedirect() {
  const pathname = usePathname();
  let blogUrl = `https://raw.githubusercontent.com/ahmet-kok/useefficiently/blog${pathname.replace(
    "blog/",
    ""
  )}.md`;
  blogUrl = "https://raw.githubusercontent.com/nazlicansahin/Login-Page/main/README.md";
  blogUrl = "https://raw.githubusercontent.com" + pathname.replace("/en/blog", "");
  console.log(blogUrl);

  return <Home contentUrl={blogUrl} open={true} />;
}
