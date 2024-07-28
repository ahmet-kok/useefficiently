"use client";

import { useEffect, useState } from "react";
import {
  FileTextIcon,
  PersonIcon,
  GroupIcon,
  SpeakerLoudIcon,
  BarChartIcon,
  BackpackIcon,
  CalendarIcon,
  BoxIcon,
  ChatBubbleIcon,
  Pencil1Icon,
  ValueIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ShinyButton from "./magicui/shiny-button";

const iconProps = "w-8 h-8 aria-hidden";
const grid = [
  {
    title: "Project Management",
    description:
      "Keeps projects on track with Airtable Interface and Airtable Automations, organizing tasks and team members, ensuring deadlines are met without stress.",
    icon: <FileTextIcon className={iconProps} />,
  },
  {
    title: "Human Resources (HR)",
    description:
      "Tracking employee performance and managing training is easy with Airtable Forms and Airtable Automations. Forms for new hires and quick application evaluations simplify the process.",
    icon: <PersonIcon className={iconProps} />,
  },
  {
    title: "Community Management",
    description:
      "Organizing the community is simple with Airtable Interface and Airtable Filters. Member info stays tidy, and events and campaigns are efficiently planned.",
    icon: <GroupIcon className={iconProps} />,
  },
  {
    title: "Marketing",
    description:
      "Marketing campaigns are easily tracked with Airtable Interface and Airtable Dashboards. Performance is analyzed, customer relationships improve, and better strategies are developed.",
    icon: <SpeakerLoudIcon className={iconProps} />,
  },
  {
    title: "Sales Management",
    description:
      "The sales process runs smoothly with Airtable Forms and Airtable Automations. Customer info is stored, interactions are tracked, and sales goals are hit quickly.",
    icon: <BarChartIcon className={iconProps} />,
  },
  {
    title: "Education Management",
    description:
      "Educational programs are easily planned with Airtable Interface and Airtable Automations. Student progress is tracked, and course content is updated as needed.",
    icon: <BackpackIcon className={iconProps} />,
  },
  {
    title: "Event Planning",
    description:
      "Plan and manage events effortlessly with Airtable Interface and Airtable Forms. Keep track of RSVPs, schedules, and logistics in one place.",
    icon: <CalendarIcon className={iconProps} />,
  },
  {
    title: "Inventory Management",
    description:
      "Monitor and manage inventory levels with Airtable Interface and Airtable Automations. Track stock levels, orders, and deliveries efficiently.",
    icon: <BoxIcon className={iconProps} />,
  },
  {
    title: "Customer Support",
    description:
      "Handle customer inquiries and support tickets with ease using Airtable Interface and Airtable Forms. Keep track of resolutions and follow-ups.",
    icon: <ChatBubbleIcon className={iconProps} />,
  },
  {
    title: "Content Creation",
    description:
      "Organize and plan content calendars with Airtable Interface and Airtable Automations. Collaborate with your team to create and publish content seamlessly.",
    icon: <Pencil1Icon className={iconProps} />,
  },
  {
    title: "Finance Tracking",
    description:
      "Manage budgets and track expenses with Airtable Interface and Airtable Dashboards. Get insights into your financial data quickly and easily.",
    icon: <ValueIcon className={iconProps} />,
  },
  {
    title: "Product Development",
    description:
      "Streamline product development with Airtable Interface and Airtable Automations. Track progress, manage tasks, and collaborate with your team effectively.",
    icon: <GearIcon className={iconProps} />,
  },
];

export default function FeaturesCards() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const visibleGrid = isMobile ? grid.slice(0, visibleCount) : grid;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleGrid.map((feature) => (
          <div key={feature.title} className="text-start group cards p-4">
            {feature.icon}
            <h4 className="my-2 text-lg">{feature.title}</h4>
            <p className="my-2">{feature.description}</p>
            <div className="card-hover" />
          </div>
        ))}
      </div>
      {isMobile && visibleCount < grid.length && (
        <div className="flex justify-center mt-4">
          <ShinyButton text="Show More" onClick={showMore} />
        </div>
      )}
    </div>
  );
}
