import Link from "next/link";
import use from "@/public/use.svg";
import Image from "next/image";
export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-4 z-[50] px-4 text-xl ">
      <nav className="flex mx-auto justify-between max-w-4xl rounded-xl border border-zinc-700 bg-zinc-800 p-3 pr-6 items-center">
        <Link href="/" className="flex items-center gap-1 text-3xl">
          <Image
            src={use}
            width="50"
            height="50"
            alt="UseEfficiently Logo"
          />{" "}
          <span className="text-2xl hidden sm:inline-block">UseEfficiently</span>
          <span className="sr-only">UseEfficiently</span>
        </Link>
        <ul className="flex gap-2">
          <li>
            <Link prefetch href="/">
              Home
            </Link>
          </li>
          <li>
            <Link prefetch href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
