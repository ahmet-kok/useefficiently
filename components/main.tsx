import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";
//import MarqueeDemo from "./marquee.tsxc";
import { Badge } from "@/components/ui/badge";

export default function Main() {
  return (
    <div className="">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container  mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4">
            <Badge className="text-sm font-light" variant="outline">No-Code Benefits</Badge>
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
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4">
            <Badge className="text-sm font-light" variant="outline">Client Testimonials</Badge>

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
                <div className="text-sm dark:text-gray-200 text-gray-700">
                  CEO, Acme Inc.
                </div>
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
                <div className="text-sm dark:text-gray-200 text-gray-700">
                  CTO, Widgets Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
