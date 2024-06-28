import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
import Header from "@/components/header";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
});
const CalCom = dynamic(() => import("@/components/ui/calcom"), {
  ssr: false,
});

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
  title: "UseEfficiently - Your Airtable Service Partner",
  description:
    "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
  keywords:
    "Airtable, No-Code Solutions, Airtable Partner, UseEfficiently, Business Solutions, Client Testimonials, Expert Team",
  openGraph: {
    title: "UseEfficiently - Your Airtable Service Partner",
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
    url: "https://useefficiently.com",
    type: "website",
    images: [
      {
        url: "https://useefficiently.com/logo.png",
        width: 800,
        height: 600,
        alt: "UseEfficiently Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@useefficiently",
    title: "UseEfficiently - Your Airtable Service Partner",
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
    images: "https://useefficiently.com/logo.png",
  },
  authors: [{ name: "UseEfficiently Team", url: "https://useefficiently.com" }],
};
export default async function RootLayout({
  children,
  params: { locale },
  modal,
}: {
  children: React.ReactNode;
  params: { locale: string };
  modal: React.ReactNode;
}) {
  const messages = await getMessages();
  return (
    <>
      <html lang={locale} className="scroll-smooth light">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body
          className={cn(
            "font-sans min-h-screen dark:bg-black",
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
            <main className="">{children}</main>
            {modal}
            <Footer />
          <CalCom />
          </ThemeProvider>
          </NextIntlClientProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
