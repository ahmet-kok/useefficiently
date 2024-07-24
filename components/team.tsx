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
import Section from "@/components/section";
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
    <Section title={t("subtitle")} description={t("description")} center>
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
          <ShinyButton dark greenIcon text={t("scheduleConsultation")} />
        </Link>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-4 group">
        {info.team.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </Section>
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
  <div className="cards grid grid-cols-3 text-start gap-2 group">
    <Avatar className="h-fit w-full aspect-square rounded-none col-span-3">
      <AvatarImage
        src={member.avatar}
        alt={`@${member.name}`}
        className="object-cover "
      />
    </Avatar>
    <div className="grid col-span-3 gap-2 p-3">
      <h4 className="col-span-3">{member.name}</h4>
      <h5 className="col-span-3">{member.role}</h5>
    </div>
    <p className=" overflow-scroll row-span-5 line-clamp-5 px-3 self-end col-span-3">
      {member.bio ? member.bio : "No bio available"}
    </p>
    <div className="self-end mx-auto justify-center flex col-span-3 p-3">
      <Dock direction="middle" className="h-12 m-0 dark:bg-zinc-900">
        {member.social
          ? member.social.map((social, index) => (
              <DockIcon key={index}>
                <Link
                  key={index}
                  href={social.url}
                  className=""
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
);
