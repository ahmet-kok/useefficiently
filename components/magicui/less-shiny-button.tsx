"use client";
import { type AnimationProps, motion } from "framer-motion";

const animationProps = {
  /*   initial: { "--x": "100%", scale: 0.8 },
   */ animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

const LessShinyButton = ({
  text = "shiny-button",
  greenIcon = false,
  onClick,
}: {
  greenIcon?: boolean;
  text?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      {...animationProps}
      className="relative rounded-lg  w-full min-w-auto px-2 py-2 font-medium backdrop-blur-xl text-nowrap transition-[box-shadow] duration-300 ease-in-out hover:shadow bg-primary text-primary-foreground"
    >
      {" "}
      {greenIcon && (
        <span className="top-[-8px] right-[-8px] absolute z-50  w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
      )}
      <span
        className="relative block h-full w-full text-sm tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default LessShinyButton;
