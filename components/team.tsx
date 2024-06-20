import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import info from "@/information.json";
import { useTranslations } from "next-intl";
import ShinyButton from "@/components/magicui/shiny-button";

export default function Team() {
  const t = useTranslations("Team");
  return (
    <section id="team" className="w-full  py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <Badge variant="outline">{t("title")}</Badge>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-3">
            {t("description")}
          </p>

          <Link href="mailto:career@useefficiently.com">
            <ShinyButton text="career@useefficienly.com" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {info.team.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    avatar: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamMember = ({ member }: TeamMemberProps) => (
  <div className="flex flex-col items-center gap-4">
    <Avatar className="w-24 h-24 bg-background text-6xl">
      <AvatarImage
        src={member.avatar}
        alt={`@${member.name}`}
        className="object-cover"
      />
      <AvatarFallback>
        {member.name[0]}
        {member.name.split(" ")[1][0]}
      </AvatarFallback>
    </Avatar>
    <div className="text-center">
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-sm dark:text-gray-200 text-gray-700">{member.role}</p>
      <div className="flex justify-center gap-2 mt-2">
        {member.twitter && (
          <Link
            href={member.twitter}
            className="dark:text-gray-200 text-gray-700 hover:text-white"
            prefetch={false}
          >
            <TwitterIcon className="w-5 h-5" />
            <span className="sr-only">
              {member.name} {" - "}Twitter
            </span>
          </Link>
        )}
        {member.linkedin && (
          <Link
            href={member.linkedin}
            className="dark:text-gray-200 text-gray-700 hover:text-white"
            prefetch={false}
          >
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">
              {member.name} {" - "}LinkedIn
            </span>
          </Link>
        )}
        {member.github && (
          <Link
            href={member.github}
            className="dark:text-gray-200 text-gray-700 hover:text-white"
            prefetch={false}
          >
            <GithubIcon className="w-5 h-5" />
            <span className="sr-only">
              {member.name} {" - "}GitHub
            </span>
          </Link>
        )}
      </div>
    </div>
  </div>
);
