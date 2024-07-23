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
      <header className=" w-full flex top-0 xl:px-6 fixed xl:top-4 inset-x-0 z-[50]">
        <div
          className="flex backdrop-blur h-14 sm:h-[8vh] shrink-0 items-center xl:border dark:xl:border-none px-4 md:px-6  container xl:rounded-lg xl:box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] xl:transform-gpu xl:dark:[border:1px_solid_rgba(255,255,255,.1)] xl:bg-opacity-80 xl:backdrop-filter  xl:bg-transparent  xl:shadow-md"
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
             font-semibold text-3xl from-text-black to-white
            "
              >
                {information.firstPart}
                <span className="text-3xl text-red-700">
                  {information.secondPart}
                </span>
              </h2>{" "}
            </Link>
          </div>
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
                    {t(path.name === "/" ? "home" : path.name.replace("/", ""))}
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
                  className="rounded-full  hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50"
                >
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">{t("menu")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[200px] dark:bg-zinc-900"
              >
                {usablePathnames.map((path, idx) => (
                  <DropdownMenuItem key={idx}>
                    <Link
                      className="flex items-center gap-2 w-full "
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

                <DropdownMenuItem className="flex items-center gap-2" key={4}>
                  <ModeToggle />
                  <span className="sr-only">{t("theme")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="h-[15vh]"></div>
    </>
  );
}
