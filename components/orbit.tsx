import { OrbitingCircle } from "@/components/orbitingCircles";
import Link from "next/link";
import ShinyButton from "./magicui/shiny-button";
import LessShinyButton from "./magicui/less-shiny-button";
import information from "@/information.json";
import Component from "@/components/component";

export default function Orbit() {
  return (
    <Component>
      <div className="flex items-center">
        <div className="rounded-lg w-full h-full">
          <OrbitingCircle />
          <div className="button-area ">
            <Link
              href={"mailto:" + information.email}
              className="relative buttons"
            >
              <span></span>

              <ShinyButton text={information.email} />
            </Link>
            <Link href="customer-stories" className="buttons">
              <LessShinyButton text="Read Our Customer Stories" />
            </Link>
          </div>
        </div>
      </div>
    </Component>
  );
}
