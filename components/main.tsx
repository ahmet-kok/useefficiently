import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import MarqueeDemo from "./marquee";

export default function Main() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32   text-white">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-background/20 px-3 py-1 text-sm">
                No-Code Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Build Faster, Innovate Quicker
              </h2>
              <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our no-code platform empowers your team to build custom
                applications without writing a single line of code. Reduce
                development time, increase agility, and focus on your core
                business.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Rapid Prototyping</h3>
                <p className="dark:text-gray-200 text-gray-700">
                  Quickly build and test new ideas without the overhead of
                  traditional software development.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Scalable Solutions</h3>
                <p className="dark:text-gray-200 text-gray-700">
                  Our platform scales with your business, allowing you to easily
                  add new features and functionality as needed.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Citizen Development</h3>
                <p className="dark:text-gray-200 text-gray-700">
                  Empower your non-technical team members to build custom
                  applications, fostering a culture of innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  text-white">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-background/20 px-3 py-1 text-sm">
                Client Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Leading Brands
              </h2>
              <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied clients about how our no-code solutions
                have transformed their businesses.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;Working with the No-Code Consultancy team has been a
                  game-changer for our business. Their expertise and innovative
                  solutions have helped us build custom applications that have
                  streamlined our operations and improved our customer
                  experience.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm dark:text-gray-200 text-gray-700">CEO, Acme Inc.</div>
                </div>
              </div>
              <div className="grid gap-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;The No-Code Consultancy team has been instrumental in
                  helping us streamline our operations and improve our customer
                  experience. Their expertise and innovative solutions have been
                  invaluable to our business.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm dark:text-gray-200 text-gray-700">CTO, Widgets Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  text-white">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-background/20 px-3 py-1 text-sm">
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transform Your Business with No-Code
              </h2>
              <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a consultation with our team to learn how our no-code
                solutions can help you build custom applications faster and more
                efficiently.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-background text-green-500 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Schedule Consultation
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-background/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  text-white">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-background/20 px-3 py-1 text-sm">
                Our Joyful Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet the Experts Behind the Magic
              </h2>
              <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our talented team of no-code experts is dedicated to
                transforming businesses with innovative solutions. Get to know
                the faces behind the magic!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-24 h-24 bg-background text-6xl">😀</Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">John Doe</h3>
                  <p className="text-sm dark:text-gray-200 text-gray-700">Co-Founder</p>
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
                <Avatar className="w-24 h-24 bg-background text-6xl">🤗</Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Jane Smith</h3>
                  <p className="text-sm dark:text-gray-200 text-gray-700">Lead Consultant</p>
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
                <Avatar className="w-24 h-24 bg-background text-6xl">😊</Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Bob Johnson</h3>
                  <p className="text-sm dark:text-gray-200 text-gray-700">Senior Architect</p>
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
                <Avatar className="w-24 h-24 bg-background text-6xl">😄</Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Sarah Lee</h3>
                  <p className="text-sm dark:text-gray-200 text-gray-700">Product Manager</p>
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t   text-white">
        <p className="text-xs">
          &copy; 2024 No-Code Consultancy. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
