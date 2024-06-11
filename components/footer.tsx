"use client";
import { useEffect } from "react";
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
  LinkedinIcon,
  MenuIcon,
  GlobeIcon,
  FlagIcon,
  ChevronRightIcon,
  HomeIcon,
  InfoIcon,
  PhoneIcon,
  MountainIcon,
} from "@/components/icons";
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
import { info } from "console";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
export default function Header() {
  const t = useTranslations("Header");

  const router = useRouter();
  const localActive = useLocale();

  useEffect(() => {
    applySystemTheme();
  }, []);

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
