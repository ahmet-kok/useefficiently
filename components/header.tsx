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
/* import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"; */
import information from "@/information.json";
export default function Header() {
  const t = useTranslations("Header");
  /* const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (windowHeight === pageHeight) {
      return;
    }
    if (typeof current === "number") {
      let direction: number | undefined;
      direction = scrollYProgress.getPrevious();
      if (typeof direction === "number") {
        direction = current - direction;
        if (scrollYProgress.get() < 0.05) {
          setVisible(true);
        } else if (window.scrollY + windowHeight >= pageHeight - 1) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  }); */
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
      {/* <AnimatePresence mode="wait">
        <motion.div
          //initial={{
          // opacity: 1,
          //y: -100,
          //}}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "w-full flex top-0 xl:px-6 fixed xl:top-4 inset-x-0 z-[50]"
          )}
        > */}
      <header className=" w-full flex top-0 xl:px-6 fixed xl:top-4 inset-x-0 z-[50]">
        <div
          className="flex backdrop-blur h-14 sm:h-[8vh] shrink-0 items-center xl:border dark:xl:border-none px-4 md:px-6  container xl:rounded-lg xl:box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] xl:transform-gpu xl:dark:[border:1px_solid_rgba(255,255,255,.1)] xl:bg-opacity-80 xl:backdrop-filter xl:dark:text-gray-50 xl:bg-transparent xl:text-gray-900 xl:shadow-md"
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
                    /* (path.slug[localActive]
                          ? `${
                              localActive === "en"
                                ? path.slug[localActive]
                                : localActive
                            }${path.slug[localActive]}`
                          : `${
                              localActive === "en"
                                ? path.slug
                                : localActive + path.slug
                            }`) */
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-lg px-2"
                    )}
                  >
                    {t(path.name === "/" ? "home" : path.name.replace("/", ""))}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              {/* <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent"
                      )}
                    >
                      {t("home")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/#faq"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent"
                      )}
                    >
                      {t("about")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/customer-stories"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent"
                      )}
                    >
                      {t("customer-stories")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/team"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent"
                      )}
                    >
                      {t("team")}
                    </NavigationMenuLink>
                  </NavigationMenuItem> */}
              {/* <DropdownMenu>
                    <DropdownMenuTrigger className="focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800 group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      <GlobeIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                      <span className="sr-only">{t("language")}</span>
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
                  </DropdownMenu> */}
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
                      /* (path.slug[localActive]
                          ? `${
                              localActive === "en"
                                ? path.slug[localActive]
                                : localActive
                            }${path.slug[localActive]}`
                          : `${
                              localActive === "en"
                                ? path.slug
                                : localActive + path.slug
                            }`) */
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
                {/* <DropdownMenuItem key={1}>
                      <Link
                        href="/"
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        <HomeIcon className="h-5 w-5" />
                        <span>{t("home")}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={2}>
                      <Link
                        href="#"
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        <InfoIcon className="h-5 w-5" />
                        <span>{t("about")}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={3}>
                      <Link
                        href="/customer-stories"
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        <PhoneIcon className="h-5 w-5" />
                        <span>{t("customer-stories")}</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem key={2}>
                      <Link
                        href="/team"
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        <InfoIcon className="h-5 w-5" />
                        <span>{t("team")}</span>
                      </Link>
                    </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem key={4}>
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
                            key={1}
                            className="flex items-center gap-2"
                            onClick={(e) => router.replace("/en")}
                          >
                            <FlagIcon className="h-5 w-5" />
                            <span>English</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            key={2}
                            className="flex items-center gap-2"
                            onClick={(e) => router.replace("/de")}
                          >
                            <FlagIcon className="h-5 w-5" />
                            <span>Deutsch</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </DropdownMenuItem> */}
                <DropdownMenuItem className="flex items-center gap-2" key={4}>
                  <ModeToggle />
                  <span className="sr-only">{t("theme")}</span>
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
      {/*           {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))} 
          <Header /> */}
      {/* </motion.div>
      </AnimatePresence> */}
      <div className="h-[15vh]"></div>
    </>
  );
}
