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
    <footer className=" h-[10vh] pb-4  border-color-t xl:border-color-t-0 footer">
      <div id="footer" className="h-[8vh]">
        <Link href={`/`} className="flex items-center " prefetch={false}>
          <h2 className="text-2xl">
            {information.firstPart}
            <span className="text-2xl text-red-700">
              {information.secondPart}
            </span>
          </h2>{" "}
        </Link>
        <NavigationMenu className=" items-center flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href={information.discord}
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
