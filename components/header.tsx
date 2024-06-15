"use client";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";
export default function Header() {
  const t = useTranslations("Header");

  const router = useRouter();
  const localActive = useLocale();

  return (
    <header className="w-full xl:top-4 xl:z-50  xl:sticky lg:px-6">
      <div
        className="flex backdrop-blur h-20  shrink-0 items-center px-4 md:px-6  container xl:rounded-lg xl:border xl:bg-opacity-80 xl:backdrop-filter xl:dark:text-gray-50 xl:bg-transparent xl:text-gray-900 xl:shadow-md"
        style={
          {
            WebkitBackdropFilter: "blur(10px)",
          } as React.CSSProperties
        }
      >
        <div className="flex items-center">
          <Link href="#" className="flex items-center " prefetch={false}>
            <MountainIcon className="h-8 w-8 mr-2" />
            <h1
              className="
             font-semibold text-3xl from-text-black to-white
            "
            >
              Use
              <span className="text-3xl text-orange-500">Efficiently</span>
            </h1>{" "}
          </Link>
        </div>
        <NavigationMenu className="ml-auto items-center hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  {t("home")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  {t("about")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#team" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  {t("contact")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
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
                  onClick={(e) => router.replace("/de")}
                >
                  <FlagIcon className="h-5 w-5" />
                  <span>Deutsch</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
                    <span>
                      {localActive === "en"
                        ? "English"
                        : localActive === "de"
                        ? "Deutsch"
                        : "Türkçe"}
                    </span>
                    <ChevronRightIcon className="h-4 w-4" />
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
                      onClick={(e) => router.replace("/de")}
                    >
                      <FlagIcon className="h-5 w-5" />
                      <span>Deutsch</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <ModeToggle />
                {/* 
                <span className="dark:hidden">{t("light")}</span>
                <span className=" hidden dark:inline-block">{t("dark")}</span>
 */}{" "}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
