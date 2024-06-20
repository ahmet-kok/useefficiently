"use client";
import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";

import information from "@/information.json";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
export default function Header() {
  const t = useTranslations("Header");

  const localActive = useLocale();
  return (
    <footer
      className="w-full mb-5 lg:px-6 border-t xl:border-t-0"
      style={
        {
          WebkitBackdropFilter: "blur(10px)",
        } as React.CSSProperties
      }
    >
      <div className="flex  h-20  shrink-0 items-center px-4 md:px-6  container xl:rounded-lg xl:border  xl:dark:text-gray-50  xl:text-gray-900 xl:shadow-md">
        <div className="flex items-center">
          <Link href="#" className="flex items-center " prefetch={false}>
            <h2
              className="
             font-semibold text-2xl from-text-black to-white
            "
            >
              Use
              <span className="text-2xl text-orange-500">Efficiently</span>
            </h2>{" "}
          </Link>
        </div>
        <NavigationMenu className="ml-auto items-center flex">
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  {t("home")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href={information.instagram} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent p-3")}
                >
                  <InstagramLogoIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                  <span className="ml-2 hidden md:block">Discord</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={information.instagram} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent p-3")}
                >
                  <InstagramLogoIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                  <span className="ml-2 hidden md:block">Youtube</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={information.instagram} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent p-3")}
                >
                  <InstagramLogoIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                  <span className="ml-2 hidden md:block">Instagram</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={information.linkedin} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent p-3")}
                >
                  <LinkedInLogoIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                  <span className="ml-2 hidden md:block">Linkedin</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </footer>
  );
}
