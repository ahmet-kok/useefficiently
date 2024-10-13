import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import information from "@/information.json";
import { GoogleAnalytics } from "@next/third-parties/google";

import dynamic from "next/dynamic";

const CalCom = dynamic(() => import("@/components/calcom"), {
  ssr: false,
});
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Modal from "@/components/modal";

export const metadata: Metadata = {
  robots: "index, follow",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
  title: {
    default: information.title,
    template: "%s | UseEfficiently - Airtable Services Partner",
  },
  description:
    "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
  keywords:
    "Airtable, No-Code Solutions, Accredited Airtable Services Partner, UseEfficiently, Business Solutions,Airtable Interfaces, Airtable Automations, Airtable Team",
  openGraph: {
    title: {
      default: information.title,
      template: "%s | UseEfficiently",
    },
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
    url: information.website,
    type: "website",
    images: [
      {
        url: information.website + "/api/og",
        alt: information.company + " Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@" + information.slug,
    title: {
      default: information.title,
      template: "%s | UseEfficiently",
    },
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
    images: information.website + "/api/og",
  },
  authors: [{ name: information.company + " Team", url: information.website }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-zinc-900  text-violet-50 px-4 max-w-4xl mx-auto flex-cols relative"
        )}
      >
        <Header />
        <div className="h-[6rem] invisible "></div>
        <main className=" sm:mt-0">{children}</main>
        <div className="h-[8rem] invisible"></div>
        <Footer />
        <Modal />
        <CalCom />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-MS4ZQ0JQQD" />
      </body>
    </html>
  );
}
