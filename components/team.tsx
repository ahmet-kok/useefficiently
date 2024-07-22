"use client";

import { TwitterIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import info from "@/information.json";
import { useTranslations } from "next-intl";
import ShinyButton from "@/components/magicui/shiny-button";
import { FC } from "react";
import information from "@/information.json";
import { Dock, DockIcon } from "./magicui/dock";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import LessShinyButton from "./magicui/less-shiny-button";
import Component from "@/components/component";
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
  const IconComponent = iconMapping[iconName];

  return <IconComponent className="w-6 h-6" />;
};
export default function Team() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  const t = useTranslations("Team");

  return (
    <Component title={t("subtitle")} description={t("description")} center>
      <div className="button-area">
        <Link href={"mailto:" + information.careerEmail} className="buttons">
          <ShinyButton text={information.careerEmail} />
        </Link>
        <Link
          className="relative buttons"
          href={""}
          data-cal-namespace=""
          data-cal-link={information.calendly}
          data-cal-config='{"layout":"month_view"}'
        >
          <span></span>

          <LessShinyButton text={t("scheduleConsultation")} />
        </Link>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2  items-center justify-center gap-4 ">
        {info.team.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </Component>
  );
}
interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
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
  <div className={" h-[200px]  group cards flex"}>
    <div className="relative ">
      <Avatar className="h-full w-[200px] aspect-square text-6xl rounded-none">
        <AvatarImage
          src={member.avatar}
          alt={`@${member.name}`}
          className="object-cover"
        />
      </Avatar>
      <div className=" absolute bottom-1 w-full  justify-center flex">
        <Dock
          style={
            {
              WebkitBackdropFilter: "blur(20px)",
            } as React.CSSProperties
          }
          direction="middle"
          className="p-0 px-3 h-12 m-0 backdrop-blur-2xl max-w-[95%]"
        >
          {member.social
            ? member.social.map((social, index) => (
                <DockIcon key={index}>
                  <Link
                    key={index}
                    href={social.url}
                    className="text-gray-200"
                    prefetch={false}
                  >
                    <SocialIcon iconName={social.icon as IconName} />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </DockIcon>
              ))
            : null}
        </Dock>
      </div>
    </div>
    <div className="text-start w-full  m-4 flex flex-wrap">
      <div>
        <h2 className=" text-3xl font-semibold w-full">{member.name}</h2>
        <h4 className="text-xl w-full dark:text-gray-200 text-gray-700">
          {member.role}
        </h4>
      </div>
      <p className="line-clamp-4 h-auto overflow-scroll  md:line-clamp-3 leading-relaxed w-full dark:text-gray-200 text-gray-700 self-end">
        {member.bio ? member.bio : "No bio available"}
      </p>
    </div>
  </div>
);
