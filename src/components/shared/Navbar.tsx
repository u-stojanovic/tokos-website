"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, Dispatch, SetStateAction } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ModeToggle } from "./ThemeModeToggle";
import BlurFade from "../magicui/blur-fade";
import BlurFadeText from "../magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;
const navLinkStyle =
  "text-gray-800 dark:text-white font-raleway lg:hover:text-pink-200 transition duration-300 text-nowrap";
const navLiComponentStyle =
  "text-gray-800 dark:text-white px-4 py-2 rounded-lg font-raleway transition duration-300 ease-in-out transform hover:bg-pink-200 hover:text-white hover:shadow-lg";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-zinc-500 to-transparent dark:from-gray-900 backdrop-filter backdrop-blur-sm text-white p-2">
      <div className="w-full flex justify-between items-center">
        <Logo />
        <DesktopMenu />
        <MobileMenuToggle
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      {isMenuOpen && (
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Image src="/logo.png" width={100} height={100} alt="Logo" />
      </BlurFade>
    </Link>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden md:flex justify-between gap-4 items-center">
      <div className="flex flex-row gap-11 mr-12 items-center">
        <NavLinks />
        <BlurFade delay={BLUR_FADE_DELAY}>
          <ModeToggle />
        </BlurFade>
      </div>
      <CartIcon />
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <NavLink href="/" text="Naslovna" />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <NavigationMenuTrigger>Prodavnica</NavigationMenuTrigger>
            </BlurFade>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 text-nowrap">
                <NavListItem href="/torte" text="Torte" />
                <NavListItem href="/kolaci" text="Kolači" />
                <NavListItem href="/poslastice" text="Poslastice" />
                <NavListItem href="/slani-ketering" text="Slani Ketering" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavLink href="/o-nama" text="O Nama" />
      <NavLink href="/faq" text="FAQ" />
      <NavLink href="/kontakt" text="Kontakt" />
    </>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
}

interface NavListItemProps {
  href: string;
  text: string;
}

function CartIcon() {
  return (
    <Link href="/korpa">
      <BlurFade delay={BLUR_FADE_DELAY}>
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
            className="size-6 hover:text-pink-200 transition duration-300 text-gray-900 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </BlurFade>
    </Link>
  );
}

function MobileMenuToggle({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  return (
    <div className="md:hidden flex items-center gap-6">
      <ModeToggle />
      <button className="ml-4 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-900 dark:text-white"
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
          className="size-6 hover:text-pink-200 transition duration-300 text-gray-900 dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </Link>
    </div>
  );
}

function MobileMenu({ setIsMenuOpen }: MobileMenuProps) {
  return (
    <div className="md:hidden mt-2 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <NavLink href="/" text="Naslovna" onClick={() => setIsMenuOpen(false)} />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Prodavnica</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 text-nowrap">
                <NavListItem
                  href="/torte"
                  text="Torte"
                  onClick={() => setIsMenuOpen(false)}
                />
                <NavListItem
                  href="/kolaci"
                  text="Kolači"
                  onClick={() => setIsMenuOpen(false)}
                />
                <NavListItem
                  href="/poslastice"
                  text="Poslastice"
                  onClick={() => setIsMenuOpen(false)}
                />
                <NavListItem
                  href="/slani-ketering"
                  text="Slani Ketering"
                  onClick={() => setIsMenuOpen(false)}
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavLink
        href="/o-nama"
        text="O Nama"
        onClick={() => setIsMenuOpen(false)}
      />
      <NavLink href="/faq" text="FAQ" onClick={() => setIsMenuOpen(false)} />
      <NavLink
        href="/kontakt"
        text="Kontakt"
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

function NavLink({ href, text, onClick }: NavLinkProps) {
  return (
    <Link href={href} className={navLinkStyle} onClick={onClick}>
      <BlurFadeText delay={BLUR_FADE_DELAY} text={text} />
    </Link>
  );
}

interface NavListItemProps {
  href: string;
  text: string;
  onClick?: () => void;
}

function NavListItem({ href, text, onClick }: NavListItemProps) {
  return (
    <li className={navLiComponentStyle}>
      <Link href={href} onClick={onClick}>
        {text}
      </Link>
    </li>
  );
}
