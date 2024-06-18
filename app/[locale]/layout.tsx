import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
import type { Metadata } from "next";
export const metadata: Metadata = {
  robots: "index, follow",
  icons: { icon: "favicon.ico", apple: "favicon.ico" },
  title: "UseEfficiently - Your Airtable Service Partner",
  description:
    "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs. We are dedicated to providing top-notch support and innovative solutions.",
  keywords:
    "Airtable, No-Code Solutions, Airtable Partner, UseEfficiently, Business Solutions, Client Testimonials, Expert Team",
  openGraph: {
    title: "UseEfficiently - Your Airtable Service Partner",
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs. We are dedicated to providing top-notch support and innovative solutions.",
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
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs. We are dedicated to providing top-notch support and innovative solutions.",
    images: "https://useefficiently.com/logo.png",
  },
  authors: [{ name: "UseEfficiently Team", url: "https://useefficiently.com" }],
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
      <html lang={locale}>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className={cn("min-h-screen font-sans ", fontSans.variable)}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
