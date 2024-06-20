"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import LessShinyButton from "@/components/magicui/less-shiny-button";
import { cn } from "@/lib/utils";

export function MultiStepLoaderDemo({
  className,
  states,
}: {
  className?: string;
  states: { text: string }[];
}) {
  const [loading, setLoading] = useState(false);
  return (
    <div className={cn("inline-block", className)}>
      {/* Core Loader Modal */}
      <Loader loadingStates={states} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <LessShinyButton
        onClick={() => setLoading(true)}
        text="Our process" /* onClick={() => setLoading(true)}  */
      />

      {loading && (
        <Button
          size={"icon"}
          className="fixed top-4  right-4 z-[120]"
          onClick={() => setLoading(false)}
        >
          <X />
        </Button>
      )}
    </div>
  );
}
