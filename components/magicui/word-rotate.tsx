"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: any[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h2">;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h2
          key={words[index]}
          className={cn(className)}
          {...framerProps}
        >
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
