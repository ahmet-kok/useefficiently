"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const TextRotate = ({ text }: { text: Array<any> }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, [setIndex, text.length]);

  return (
    <div className="relative w-max items-center justify-center flex">
      <AnimatePresence>
        <motion.div
          className="absolute"
          key={index}
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.8 }}
          transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextRotate;
