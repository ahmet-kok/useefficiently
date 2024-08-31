import Link from "next/link";
import { SiLinkedin, SiUpwork, SiInstagram, SiX } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="mb-4 z-[50] text-xl">
      <nav className="flex mx-auto justify-between max-w-4xl rounded-xl border border-zinc-700 bg-zinc-800 p-6">
        <h2>
          made by Leo with <span className="text-violet-200">love</span>
        </h2>
        <ul className="flex gap-2 items-center text-violet-200 ">
          <li>
            <Link href="https://www.linkedin.com/company/useefficiently/">
              <span className="sr-only">UseEfficiently Linkedin</span>
              <SiLinkedin />
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="sr-only">UseEfficiently Upwork</span>
              <SiUpwork />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/useefficiently/">
              <span className="sr-only">UseEfficiently Instagram</span>
              <SiInstagram />
            </Link>
          </li>
          <li>
            <Link href="https://www.x.com/useefficiently/">
              <span className="sr-only">UseEfficiently X</span>
              <SiX />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
