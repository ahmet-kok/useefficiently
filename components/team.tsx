import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
      <div className="container mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <Badge variant="outline">Our Joyful Team</Badge>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet the Experts Behind the Magic
          </h2>
          <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our talented team of no-code experts is dedicated to transforming
            businesses with innovative solutions. Get to know the faces behind
            the magic!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center gap-4">
          <Avatar className="w-24 h-24 bg-background text-6xl">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>            <div className="text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-sm dark:text-gray-200 text-gray-700">
                Co-Founder
              </p>
              <div className="flex justify-center gap-2 mt-2">
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <TwitterIcon className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-24 h-24 bg-background text-6xl">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-sm dark:text-gray-200 text-gray-700">
                Lead Consultant
              </p>
              <div className="flex justify-center gap-2 mt-2">
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <TwitterIcon className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
          <Avatar className="w-24 h-24 bg-background text-6xl">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Bob Johnson</h3>
              <p className="text-sm dark:text-gray-200 text-gray-700">
                Senior Architect
              </p>
              <div className="flex justify-center gap-2 mt-2">
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <TwitterIcon className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
          <Avatar className="w-24 h-24 bg-background text-6xl">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>            <div className="text-center">
              <h3 className="text-xl font-semibold">Sarah Lee</h3>
              <p className="text-sm dark:text-gray-200 text-gray-700">
                Product Manager
              </p>
              <div className="flex justify-center gap-2 mt-2">
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <TwitterIcon className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="dark:text-gray-200 text-gray-700 hover:text-white"
                  prefetch={false}
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
