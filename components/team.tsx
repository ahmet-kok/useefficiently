"use client";

import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import info from "@/information.json";
import { useTranslations } from "next-intl";
import ShinyButton from "@/components/magicui/shiny-button";
import { FC } from "react";
import information from "@/information.json";

type IconName = "GithubIcon" | "TwitterIcon" | "LinkedinIcon";

const iconMapping: Record<IconName, FC<{ className?: string }>> = {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  // Add more icons as needed
};
interface SocialIconProps {
  iconName: IconName;
}
const SocialIcon: FC<SocialIconProps> = ({ iconName }) => {
  // Get the component from the mapping
  const IconComponent = iconMapping[iconName];

  return <IconComponent className="w-5 h-5" />;
};
export default function Team() {
  const t = useTranslations("Team");

  return (
    <section className="w-full  py-12 md:py-24 min-h-[80vh]">
      <div className="container mx-auto px-4 md:px-6 2xl:px-0 grid gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-3">
            {t("description")}
          </p>
          <div className="flex w-full sm:max-w-[250px] ">
            <Link
              href={"mailto:" + information.careerEmail}
              className="shrink w-full"
            >
              <ShinyButton text={information.careerEmail} />
            </Link>
          </div>
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
    social?: Array<{
      name: string;
      url: string;
      icon: React.ReactNode;
    }>;
  };
}

const TeamMember = ({ member }: TeamMemberProps) => (
  <div className="flex flex-col items-center gap-4">
    <div className="relative">
      <Avatar className="w-24 h-24 bg-background text-6xl relative">
        <AvatarImage
          src={member.avatar}
          alt={`@${member.name}`}
          className="object-cover"
        />
        {
          //absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900
        }{" "}
        {/*        <AvatarFallback>
          {member.name[0]}
          {member.name.split(" ")[1][0]}
        </AvatarFallback> */}
      </Avatar>
    </div>
    <div className="text-center">
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-sm dark:text-gray-200 text-gray-700">{member.role}</p>
      <div className="flex justify-center gap-2 mt-2">
        {member.twitter && (
          <Link
            href={member.twitter}
            className="dark:text-gray-200 text-gray-700  "
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
            className="dark:text-gray-200 text-gray-700"
            prefetch={false}
          >
            <LinkedinIcon className="w-5 h-5 " />
            <span className="sr-only">
              {member.name} {" - "}LinkedIn
            </span>
          </Link>
        )}
        {member.github && (
          <Link
            href={member.github}
            className="dark:text-gray-200 text-gray-700 "
            prefetch={false}
          >
            <GithubIcon className="w-5 h-5" />
            <span className="sr-only">
              {member.name} {" - "}GitHub
            </span>
          </Link>
        )}
        {member.social
          ? member.social.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className="dark:text-gray-200 text-gray-700"
                prefetch={false}
              >
                <SocialIcon iconName={social.icon as IconName} />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))
          : null}
      </div>
    </div>
  </div>
);
