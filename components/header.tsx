"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { applySystemTheme } from "@/app/utils/theme";
import { toggleTheme } from "@/app/utils/theme";
import {
  SunIcon,
  MoonIcon,
  MenuIcon,
  GlobeIcon,
  FlagIcon,
  ChevronRightIcon,
  HomeIcon,
  InfoIcon,
  PhoneIcon,
  MountainIcon,
} from "@/components/icons";

export default function Header() {
  const t = useTranslations("Header");

  const router = useRouter();
  const localActive = useLocale();

  useEffect(() => {
    applySystemTheme();
  }, []);

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-background text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      <div className="flex items-center">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-4 hidden md:flex">
        <Link
          href="#"
          className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={false}
        >
          {t("home")}
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={false}
        >
          {t("about")}
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={false}
        >
          {t("contact")}
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-gray-100 focus:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800flex items-center gap-1 bg-background hover:bg-gray-100 focus:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
            <GlobeIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={(e) => router.replace("/en")}
            >
              <FlagIcon className="h-5 w-5" />
              <span>English</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={(e) => router.replace("/tr")}
            >
              <FlagIcon className="h-5 w-5" />
              <span>Türkçe</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          onClick={toggleTheme}
          className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-gray-100 focus:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
        >
          <SunIcon className="h-5 w-5 min-w-[16px] min-h-[16px] dark:hidden" />
          <MoonIcon className="h-5 w-5 min-w-[16px] min-h-[16px] hidden dark:inline-block" />
        </button>
      </div>
      <div className="ml-auto flex items-center gap-4 md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <HomeIcon className="h-5 w-5" />
                <span>{t("home")}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <InfoIcon className="h-5 w-5" />
                <span>{t("about")}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <PhoneIcon className="h-5 w-5" />
                <span>{t("contact")}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5" />
                  <span>{localActive === "en" ? "English" : "Türkçe"}</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem
                    className="flex items-center gap-2"
                    onClick={(e) => router.replace("/en")}
                  >
                    <FlagIcon className="h-5 w-5" />
                    <span>English</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex items-center gap-2"
                    onClick={(e) => router.replace("/tr")}
                  >
                    <FlagIcon className="h-5 w-5" />
                    <span>Türkçe</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              <SunIcon className="h-5 w-5 dark:hidden" />
              <span className="dark:hidden">{t("light")}</span>
              <MoonIcon className="h-5 w-5 hidden dark:inline-block" />
              <span className=" hidden dark:inline-block">{t("dark")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
