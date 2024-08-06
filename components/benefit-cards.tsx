"use client";

import { useEffect, useState } from "react";

import ShinyButton from "./magicui/shiny-button";

const grid = [
  {
    title: "Cost-Effective Solutions",
    description: "Save money by hiring us instead of a full-time developer."
  },
  {
    title: "Focus on Core Business",
    description: "We handle tech so you can focus on growing your business."
  },
  {
    title: "Enhanced Security",
    description: "We keep your systems and data safe and secure."
  },
  {
    title: "Expertise and Experience",
    description: "Benefit from our years of experience and knowledge."
  },
  {
    title: "Quick Implementation",
    description: "Fast setup to keep your business running smoothly."
  },
  {
    title: "Scalable Solutions",
    description: "Tailored services to fit your unique needs."
  },
  {
    title: "Continuous Support",
    description: "Ongoing support to keep your systems updated."
  },
  {
    title: "Access to Latest Technologies",
    description: "We use the latest tools and tech for the best results."
  }
];

export default function BenefitsCards() {
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
      <div className="xl:flex xl:flex-wrap  xl:justify-center gap-4 grid xl:grid-cols-none grid-cols-1  md:grid-cols-2">
        {visibleGrid.map((benefit) => (
          <div key={benefit.title} className=" group px-8 py-2 xl:shrink xl:w-auto  rounded-full border-color">
            <h5 className=" text-lg">{benefit.title}</h5>
            <p className="">{benefit.description}</p>
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
