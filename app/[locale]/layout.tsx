import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  robots: "index, follow",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans antialiased dark:bg-gray-950 dark:text-gray-50 bg-white text-gray-900",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
