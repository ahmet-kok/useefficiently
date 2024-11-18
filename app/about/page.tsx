import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import Image from "next/image";
import { team } from "@/use";
import { Button } from "@/components/button";
import information from "@/information.json";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "About";
  const description = "Contact us for any questions or feedback you may have.";

  const metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: information.website,
      type: "website",
      images: [
        {
          url:
            information.website +
            "/api/og?title=" +
            title +
            " | UseEfficiently",
          alt: information.company + " Logo",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@" + information.slug,
      title: title,
      description: description,
      images: information.website + "/api/og?title=" + title,
    },
  };

  return metadata;
}
export default function Page() {
  return (
    <div className="grid place-content-center grid-cols-1 pt-20 items-center justify-center gap-16">
      <h1 className="text-center text-4xl sm:text-6xl font-medium leading-tight content-center ">
        Team UseEfficiently
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map((member) => (
          <Button
            key={member.name}
            title={member.name}
            description={member.quote}
            link={member.linkedin}
            className="flex text-start cursor-pointer duration-300 transition-all hover:scale-105 items-center relative w-full max-w-lg mx-auto"
          >
            <Image
              className="rounded-full z-40"
              style={{ width: "150px" }}
              width={200}
              loading="lazy"
              height={200}
              src={member.pic}
              alt={member.name}
            />
            <div className="border border-zinc-700 flex bg-zinc-800 p-2 w-full rounded-full absolute">
              <div style={{ width: "150px" }}></div>
              <div>
                <h2 className="text-3xl font-medium">{member.name}</h2>
                {/* <h3 className="text-lg leading-tight text-violet-200 mb-2">
                    {member.title}
                  </h3> */}
                <div className="w-min flex gap-2 text-violet-200 text-2xl items-center jus">
                  <Link href={member.linkedin} target="_blank">
                    <SiLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </Button>
        ))}
        {/*           <Button
            key="Your Name"
            title="Your Name"
            description="You can be here!"
            link=""
            className="flex text-start cursor-pointer duration-300 transition-all hover:scale-105 items-center relative w-full max-w-lg mx-auto"
          >
            <Image
              className="rounded-full z-40"
              style={{ width: "150px" }}
              width={200}
              height={200}
              src="/images/you.jpg"
              alt="Your Name"
            />
            <div className="border border-zinc-700 flex bg-zinc-800 p-6 w-full rounded-full absolute">
              <div style={{ width: "140px" }}></div>
              <div>
                <h2 className="text-3xl font-medium">Your Name</h2>
                <h3 className="text-lg leading-tight text-violet-200 mb-2">
                  You can be here!
                </h3>
              </div>
            </div>
          </Button> */}
      </div>
    </div>
  );
}
