"use client";

import * as React from "react";
import { MoonIcon, SunIcon, ChevronRightIcon } from "@/components/icons";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { systemTheme } = useTheme();

  const t = useTranslations("Header");
  return (
    <>
      <div className="block md:hidden ">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2" asChild>
            <button>
              <SunIcon className="h-5 w-5 dark:hidden " />
              <MoonIcon className="h-5 w-5 hidden dark:inline-block " />
              <span className="sr-only">{t("theme")}</span>
              <span className="dark:hidden inline-block md:hidden">
                {t("light")}
              </span>
              <span className=" hidden dark:inline-block md:hidden">
                {t("dark")}
              </span>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="dark:bg-zinc-900">
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("light")}
            >
              <SunIcon className="h-5 w-5 " />

              {t("light")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("dark")}
            >
              <MoonIcon className="h-5 w-5" />

              {t("dark")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("system")}
            >
              {systemTheme === "dark" ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
              {t("system")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:inline-block">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="focus:bg-zinc-100 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            asChild
          >
            <button>
              <SunIcon className="h-5 w-5 dark:hidden min-w-[16px] min-h-[16px]" />
              <MoonIcon className="h-5 w-5 hidden dark:inline-block min-w-[16px] min-h-[16px]" />
              <span className="sr-only">{t("theme")}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("light")}
            >
              <SunIcon className="h-5 w-5" />

              {t("light")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("dark")}
            >
              <MoonIcon className="h-5 w-5" />

              {t("dark")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("system")}
            >
              {systemTheme === "dark" ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
              {t("system")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
