"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { BiCalendar as CalendarIcon } from "react-icons/bi";
import information from "@/information.json";

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

  return (
    <>
      <button
        className={`fixed p-2 bottom-5 sm:p-4 sm:bottom-10  border-color-2 rounded-full  z-[40] right-3 sm:right-10 gap-2 items-center flex`}
        data-cal-namespace=""
        data-cal-link={information.calendly}
        data-cal-config='{"layout":"month_view"}'
      >
        <CalendarIcon className="w-7 h-7" />
        Book a meeting
      </button>
    </>
  );
}
