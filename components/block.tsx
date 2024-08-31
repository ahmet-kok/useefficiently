"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

const MotionBlock = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className={cn(
        "rounded-xl border border-zinc-700 bg-zinc-800 p-6 text-start",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
const Block = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

const ButtonBlock = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-xl border border-zinc-700 bg-zinc-800 p-6 text-start cursor-pointer duration-300 transition-all hover:scale-105",
        className
      )}
    >
      {children}
    </button>
  );
};

export { MotionBlock, Block, ButtonBlock };
