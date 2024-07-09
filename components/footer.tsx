"use client";
import Link from "next/link";

import information from "@/information.json";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { InstagramIcon, LinkedinIcon, DiscordIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className=" h-[10vh] pb-4 lg:px-6 border-t xl:border-t-0">
      <div className="flex h-[8vh] shrink-0 items-center px-4 md:px-6  container xl:rounded-lg xl:border  xl:dark:text-gray-50  xl:text-gray-900 xl:shadow-md">
        <div className="flex items-center">
          <Link href={`/`} className="flex items-center " prefetch={false}>
            <h2
              className="
             font-semibold text-2xl from-text-black to-white
            "
            >
              Use
              <span className="text-2xl text-red-700">Efficiently</span>
            </h2>{" "}
          </Link>
        </div>
        <NavigationMenu className="ml-auto items-center flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href={information.instagram}
                legacyBehavior
                passHref
                prefetch={false}
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent p-3"
                  )}
                >
                  <DiscordIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                  <span className="sr-only">Discord</span>
                  <span className="ml-1 hidden md:block">Discord</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href={information.instagram}
                legacyBehavior
                passHref
                prefetch={false}
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent p-3"
                  )}
                >
                  <InstagramIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                  <span className="sr-only">Instagram</span>
                  <span className="ml-1 hidden md:block">Instagram</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href={information.linkedin}
                legacyBehavior
                passHref
                prefetch={false}
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent p-3"
                  )}
                >
                  <LinkedinIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                  <span className="sr-only">Linkedin</span>
                  <span className="ml-1 hidden md:block">Linkedin</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </footer>
  );
}
