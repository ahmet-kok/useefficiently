"use client"


import Contact from "@/components/contact";
import useMetadata from "@/hooks/useMetadata";
export default function ContactPage() {
  useMetadata(
    "Contact - UseEfficiently",
    "Contact UseEfficiently for any queries or feedback."
  );

  return <Contact page />;
}
