"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import information from "@/information.json";
import { useEffect } from "react";

export default function CalCom({ show = false }: { show?: boolean }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return show && <Cal calLink={information.cal} />;
}
