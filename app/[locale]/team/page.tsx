"use client";

import Team from "@/components/team";
import useMetadata from "@/hooks/useMetadata";
export default function TeamPage() {
  useMetadata("Team - UseEfficiently", "Meet the team behind UseEfficiently.");

  return <Team />;
}
