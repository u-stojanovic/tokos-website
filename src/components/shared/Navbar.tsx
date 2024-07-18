"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ModeToggle } from "./ThemeModeToggle";

const navLinkStyle =
  "text-gray-800 dark:text-white font-raleway lg:hover:text-pink-200 transition duration-300 text-nowrap";
const navLiComponentStyle =
  "text-gray-800 dark:text-white px-4 py-2 rounded-lg font-raleway transition duration-300 ease-in-out transform hover:bg-pink-200 hover:text-white hover:shadow-lg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-zinc-500 to-transparent dark:from-gray-900 backdrop-filter backdrop-blur-sm text-white p-2">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
        </Link>
        <div className="hidden md:flex justify-between gap-4 items-center">
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
            <ModeToggle />
          </div>
          <Link href="/korpa">
            <div className="ml-6 mr-3 relative">
              <span className="bg-pink-300 text-white rounded-full absolute w-4 h-4 -top-1 -right-1 flex justify-center items-center text-sm text-center">
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
        <div className="md:hidden flex items-center gap-6">
          <ModeToggle />
          <button
            className="ml-4 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <Link href="/korpa" className="relative ml-4">
            <span className="bg-pink-300 text-white rounded-full absolute w-4 h-4 -top-1 -right-1 flex justify-center items-center text-sm text-center">
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
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <Link
            href="/"
            className={navLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Naslovna
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Prodavnica</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 text-nowrap">
                    <li className={navLiComponentStyle}>
                      <Link href="/torte" onClick={() => setIsMenuOpen(false)}>
                        Torte
                      </Link>
                    </li>
                    <li className={navLiComponentStyle}>
                      <Link href="/kolaci" onClick={() => setIsMenuOpen(false)}>
                        Kolači
                      </Link>
                    </li>
                    <li className={navLiComponentStyle}>
                      <Link
                        href="/poslastice"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Poslastice
                      </Link>
                    </li>
                    <li className={navLiComponentStyle}>
                      <Link
                        href="/slani-ketering"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Slani Ketering
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/o-nama"
            className={navLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            O Nama
          </Link>
          <Link
            href="/faq"
            className={navLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/kontakt"
            className={navLinkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
