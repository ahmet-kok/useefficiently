"use client";
import {
  FilloutPopupEmbed,
  FilloutStandardEmbed,
  FilloutFullScreenEmbed,
} from "@fillout/react";
import { useState } from "react";
import information from "@/information.json";

interface FilloutEmbedProps {
  mode?: "popup" | "standard" | "fullscreen";
  show?: boolean;
  onClose?: () => void;
}

// Extract domain and form ID from the cal URL or just use the form ID if it's not a URL
function parseFilloutConfig(calValue: string) {
  try {
    // If it's a full URL, parse it
    if (calValue.startsWith("http")) {
      const urlObj = new URL(calValue);
      const domain = urlObj.hostname;
      const formId = urlObj.pathname.substring(1); // Remove leading slash
      return { domain, formId };
    } else {
      // If it's just a form ID, use default domain
      return { domain: undefined, formId: calValue };
    }
  } catch (error) {
    // Fallback - treat as form ID
    return { domain: undefined, formId: calValue };
  }
}

const { domain, formId } = parseFilloutConfig(information.cal);

export default function FilloutEmbed({
  mode = "popup",
  show = false,
  onClose,
}: FilloutEmbedProps) {
  const [isOpen, setIsOpen] = useState(show);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  if (mode === "standard") {
    return show ? (
      <div style={{ width: "100%", height: "600px" }}>
        <FilloutStandardEmbed
          filloutId={formId}
          {...(domain && { domain })}
          dynamicResize
        />
      </div>
    ) : null;
  }

  if (mode === "fullscreen") {
    return show ? <FilloutFullScreenEmbed filloutId={formId} /> : null;
  }

  return (
    <FilloutPopupEmbed
      filloutId={formId}
      {...(domain && { domain })}
      isOpen={isOpen || show}
      onClose={handleClose}
    />
  );
}

export function FilloutButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
      <FilloutPopupEmbed
        filloutId={formId}
        {...(domain && { domain })}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
