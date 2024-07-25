"use client";
import Link from "next/link";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { pathnames, locales } from "@/config";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { MenuIcon, MountainIcon } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";

import information from "@/information.json";
export default function Header() {
  const t = useTranslations("Header");

  const localActive = useLocale();

  const pthnames: any = pathnames;
  const lcls: any = locales;
  const usablePathnames = Object.keys(pathnames)
    .filter((key) => !lcls.includes(key))
    .map((key) => {
      return { name: key, slug: pthnames[key] };
    });
  return (
    <>
      <header className=" w-full top-0 fixed xl:top-4 inset-x-0 z-[50]  header">
        <div
          id="header"
          className="h-14 sm:h-[8vh]"
          style={
            {
              WebkitBackdropFilter: "blur(10px)",
            } as React.CSSProperties
          }
        >
          <div className="flex items-center">
            <Link
              href={`/${localActive}`}
              className="flex items-center "
              prefetch={false}
            >
              <MountainIcon className="h-8 w-8 mr-2" />
              <h2
                className="
             font-semibold text-2xl sm:text-3xl 
            "
              >
                {information.firstPart}
                <span className="text-2xl sm:text-3xl text-red-700">
                  {information.secondPart}
                </span>
              </h2>{" "}
            </Link>
          </div>
          <div>
            <NavigationMenu className="ml-auto items-center hidden md:flex">
              <NavigationMenuList>
                {usablePathnames.map((path, idx) => (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuLink
                      href={
                        (localActive === "en" ? "" : "/" + localActive) +
                        (path.slug[localActive]
                          ? path.slug[localActive]
                          : path.slug)
                      }
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-base px-2"
                      )}
                    >
                      {t(
                        path.name === "/" ? "home" : path.name.replace("/", "")
                      )}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <ModeToggle />
                  <span className="sr-only">{t("theme")}</span>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-auto flex items-center gap-4 md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-full hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50"
                  >
                    <MenuIcon className="h-9 w-9" />
                    <span className="sr-only">{t("menu")}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-[220px] dark:bg-zinc-900"
                >
                  {usablePathnames.map((path, idx) => (
                    <DropdownMenuItem key={idx}>
                      <Link
                        className="flex text-base items-center gap-2 w-full "
                        prefetch={true}
                        href={
                          (localActive === "en" ? "" : "/" + localActive) +
                          (path.slug[localActive]
                            ? path.slug[localActive]
                            : path.slug)
                        }
                      >
                        <span>
                          {t(
                            path.name === "/"
                              ? "home"
                              : path.name.replace("/", "")
                          )}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="flex items-center p-0 m-0 "
                    key={4}
                  >
                    <ModeToggle />
                    <span className="sr-only">{t("theme")}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[15vh]"></div>
    </>
  );
}
