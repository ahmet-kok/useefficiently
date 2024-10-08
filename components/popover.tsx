import React, { ReactNode } from "react";

interface PopoverProps {
  title: string;
  description: string;
  position: "left" | "right" | "top";
  children: ReactNode;
}

const Popover: React.FC<PopoverProps> = ({
  title,
  description,
  position,
  children,
}) => {
  // Define position classes based on the `position` prop
  const positionClasses: { [key: string]: string } = {
    left: "left-0 transform -translate-x-full -translate-y-1/2",
    right: "right-0 transform translate-x-full -translate-y-1/2",
    top: "top-0 transform -translate-y-full -translate-x-1/2",
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute ${positionClasses[position]} 
        bg-gray-800 text-white text-sm rounded px-3 py-2 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300 
        w-64 shadow-lg z-10`}
      >
        <div className="font-bold mb-1">{title}</div>
        <div>{description}</div>

        {/* Popover arrow */}
        <div
          className={`absolute ${
            position === "top"
              ? "bottom-0 left-1/2 transform -translate-x-1/2"
              : position === "left"
              ? "right-0 top-1/2 transform -translate-y-1/2"
              : "left-0 top-1/2 transform -translate-y-1/2"
          } h-0 w-0 border-8 border-transparent ${
            position === "top" ? "border-t-gray-800" : "border-l-gray-800"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Popover;
