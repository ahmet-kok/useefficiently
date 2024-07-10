"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CalendarIcon } from "@/components/icons";
import { type AnimationProps, motion } from "framer-motion";
import information from "@/information.json";

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
export default function CalCom() {
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
  const [isAboveFooter, setIsAboveFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const isAbove = footerRect.top > window.innerHeight;

      setIsAboveFooter(isAbove);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = useTranslations("Hero");

  return (
    <>
      <motion.button
        {...animationProps}
        className={`fixed p-2 bottom-5 sm:p-4 transition-[right] sm:bottom-10 duration-200  bg-transparent border-2 rounded-full border-black text-black backdrop-blur-xl z-[40] ${
          isAboveFooter
            ? "right-3 sm:right-10"
            : "sm:right-[-300px] right-[-300px]"
        }`}
        style={
          {
            WebkitBackdropFilter: "blur(24px)",
          } as React.CSSProperties
        }
        data-cal-namespace=""
        data-cal-link={information.calendly}
        data-cal-config='{"layout":"month_view"}'
      >
        <span
          className="  gap-2 items-center flex text-xl tracking-wide text-black  dark:text-[rgb(255,255,255,90%)]"
          style={{
            maskImage:
              "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
          }}
        >
          <CalendarIcon className="w-7 h-7" />

          {t("bookACall")}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>
    </>
  );
}
