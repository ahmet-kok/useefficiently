import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Rubik as FontSans } from "next/font/google";
import information from "@/information.json";
import "@/app/globals.css";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});
import Header from "@/components/header";
import type { Metadata } from "next";

import Footer from "@/components/footer";
import Head from "next/head";

export const metadata: Metadata = {
  robots: "index, follow",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "32x32",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon.ico",
    },
  ],
  title: "UseEfficiently - Global Airtable Service Provider",
  description:
    "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
  keywords:
    "Airtable, No-Code Solutions, Airtable Service Provider, UseEfficiently, Business Solutions,Airtable Interfaces, Airtable Automations, Airtable Team",
 /*  openGraph: {
    title: "UseEfficiently - Global Airtable Service Provider",
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
    url: information.website,
    type: "website",
    images: [
      {
        url: information.website + "/api/og?title=" + information.company,
        alt: information.company + " Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@" + information.slug,
    title: "UseEfficiently - Global Airtable Service Provider",
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
    images: information.website + "/api/og?title=" + information.company,
  }, */
  authors: [{ name: information.company + " Team", url: information.website }],
};
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <>
      <html lang={locale} className="scroll-smooth">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body
          className={cn(
            "font-sans  min-h-screen dark:bg-zinc-900 ",
            fontSans.variable
          )}
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
