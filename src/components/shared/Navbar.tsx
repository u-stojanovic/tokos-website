"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const navLinkStyle =
  "text-black font-sans hover:text-pink-200 transition duration-300";
const navLiComponentStyle =
  "px-4 py-2 rounded-lg font-sans transition duration-300 ease-in-out transform hover:bg-pink-200 hover:text-white hover:shadow-lg";

export default function Navbar() {
  return (
    <nav className="flex flex-row p-5 bg-transparent">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={150} height={150} alt="Logo" />
        </Link>
        <div className="flex justify-between gap-4 items-center">
          <div className="flex flex-row gap-11 mr-12 items-center">
            <Link href="/" className={navLinkStyle}>
              Naslovna
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Prodavnica</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 text-nowrap">
                      <li className={navLiComponentStyle}>
                        <Link href="/torte">Torte</Link>
                      </li>
                      <li className={navLiComponentStyle}>
                        <Link href="/kolaci">Kolači</Link>
                      </li>
                      <li className={navLiComponentStyle}>
                        <Link href="/poslastice">Poslastice</Link>
                      </li>
                      <li className={navLiComponentStyle}>
                        <Link href="/slani-ketering">Slani Ketering</Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/o-nama" className={navLinkStyle}>
              O Nama
            </Link>
            <Link href="/faq" className={navLinkStyle}>
              FAQ
            </Link>
            <Link href="/kontakt" className={navLinkStyle}>
              Kontakt
            </Link>
          </div>
          <Link href="/korpa">
            <div className="ml-6 mr-3">
              <span className="bg-pink-200 text-white rounded-full absolute w-5 h-5 top-14 right-4 flex justify-center items-center text-sm text-center">
                12
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hover:text-pink-200 transition duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
