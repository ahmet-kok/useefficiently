"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import information from "@/information.json";
import { useEffect } from "react";

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

  return <Cal calLink={information.cal} />;
}
