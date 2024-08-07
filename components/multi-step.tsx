"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Cross2Icon } from "@/components/icons";
import ShinyButton from "@/components/magicui/shiny-button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const MultiStepLoader = dynamic(
  () => import("@/components/ui/multi-step-loader"),
  {
    ssr: false,
  }
);

export default function MultiStep({
  className,
  text,
  states,
}: {
  text: string;
  className?: string;
  states: [];
}) {
  const [isMultiStepDownloaded, setMultiStepDownloaded] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) setMultiStepDownloaded(true);
  }, [setLoading, loading]);
  return (
    <div className={cn("inline-block", className)}>
      <ShinyButton onClick={() => setLoading(true)} text={text} dark/>
      {isMultiStepDownloaded && (
        <>
          <MultiStepLoader
            loadingStates={states}
            loading={loading}
            duration={2000}
          />
          {loading && (
            <Button
              size={"icon"}
              className="fixed top-4  right-4 z-[120]"
              onClick={() => setLoading(false)}
            >
              <Cross2Icon className="w-6 h-6" />
            </Button>
          )}
        </>
      )}
    </div>
  );
}
