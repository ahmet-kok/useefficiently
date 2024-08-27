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
import { useLocale } from "next-intl";
import Image from "next/image";

import {
  InstagramIcon,
  LinkedinIcon,
  DiscordIcon,
  ArchiveIcon,
} from "@/components/icons";

export default function Footer() {
  const localActive = useLocale();

  return (
    <footer className=" h-[10vh] pb-4  border-color-t xl:border-color-t-0 footer">
      <div id="footer" className="h-[8vh]">
        <Link
          href={`/${localActive}`}
          className="flex items-center"
          prefetch={false}
        >
          <h2
            className="
             font-normal text-lg sm:text-xl m-2
            "
          >
            made with ❤️ by Team {information.firstPart}
            {information.secondPart}
          </h2>{" "}
        </Link>
        <div>
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
          <NavigationMenu className=" items-center flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href={
                    "https://useefficiently.notion.site/Brand-Kit-UseEfficiently-6fe35d97ae4947a192fa6765f2deab46?pvs=4"
                  }
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
                    <ArchiveIcon className="h-5 w-5 min-w-[16px] min-h-[16px]" />
                    <span className="ml-1">Brand Kit</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </footer>
  );
}
