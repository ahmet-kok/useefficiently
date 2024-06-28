"use client";
import { createPortal } from "react-dom";
import PortfolioPost from "@/components/portfolio-post";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export function Modal({
  slug: slug,
}: /*   open,
  setOpen, */
{
  slug: string;
  /*   open: boolean; */
  /*   setOpen: (open: boolean) => void; */
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isDrawerOpen) {
      console.log("Drawer is closed");
      // router back after 3 seconds
      setTimeout(() => {
        router.back();
      }, 200);
      /*       router.back();
       */
    }
  }, [isDrawerOpen, , router]);

  return createPortal(
    <PortfolioPost slug={slug} open={isDrawerOpen} setOpen={setIsDrawerOpen} />,
    document.getElementById("modal-root")!
  );
}
