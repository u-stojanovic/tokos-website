"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ModeToggle } from "./ThemeModeToggle";
import BlurFade from "../magicui/blur-fade";
import { XIcon, Menu } from "lucide-react";
import { navigationLinks } from "@/data/navigationLinks";

const BLUR_FADE_DELAY = 0.04;

const navLinkStyle =
  "relative text-lightMode-text dark:text-darkMode-text font-raleway transition duration-300 text-nowrap after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full";

const activeNavLinkStyle =
  "relative text-lightMode-text dark:text-darkMode-text font-raleway transition duration-300 text-nowrap font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:transition-all after:duration-300";

const navLiComponentStyle =
  "text-lightMode-text dark:text-darkMode-text px-4 py-2 rounded-lg font-raleway transition duration-300 ease-in-out transform hover:bg-lightMode-surface dark:hover:bg-darkMode-surface dark:hover:text-white hover:shadow-lg";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavLinkProps {
  href: string;
  text: string;
  pathname: string;
  onClick?: () => void;
}

interface NavListItemProps {
  href: string;
  text: string;
  pathname: string;
  onClick?: () => void;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 ${isMenuOpen ? "bg-lightMode-background dark:bg-darkMode-background lg:bg-transparent" : "bg-gradient-to-b from-lightMode-background to-transparent dark:from-darkMode-background"} backdrop-filter backdrop-blur-sm text-lightMode-text dark:text-darkMode-text`}
      >
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="w-full flex justify-between items-center p-4">
            <Logo />
            <DesktopMenu pathname={pathname} />
            <MobileMenuToggle
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </BlurFade>
        {isMenuOpen && (
          <BlurFade delay={BLUR_FADE_DELAY}>
            <MobileMenu pathname={pathname} setIsMenuOpen={setIsMenuOpen} />
          </BlurFade>
        )}
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" width={100} height={100} alt="Logo" />
    </Link>
  );
}

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="hidden lg:flex justify-between gap-4 items-center">
      <div className="flex flex-row gap-11 mr-12 items-center">
        <NavLinks pathname={pathname} />
      </div>
      <CartIcon />
    </div>
  );
}

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {navigationLinks.map((link, index) =>
        link.subLinks ? (
          <NavigationMenu key={index}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{link.text}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-lightMode-background dark:bg-darkMode-background">
                  <ul className="grid gap-3 p-4 text-nowrap">
                    {link.subLinks.map((subLink, subIndex) => (
                      <NavListItem
                        key={subIndex}
                        href={subLink.href}
                        text={subLink.text}
                        pathname={pathname}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <NavLink
            key={index}
            href={link.href}
            text={link.text}
            pathname={pathname}
          />
        ),
      )}
    </>
  );
}

function NavLink({ href, text, pathname, onClick }: NavLinkProps) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={isActive ? activeNavLinkStyle : navLinkStyle}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

function NavListItem({ href, text, pathname, onClick }: NavListItemProps) {
  const isActive = pathname === href;
  return (
    <Link href={href} onClick={onClick}>
      <li
        className={
          isActive ? `${navLiComponentStyle} bg-pink-200` : navLiComponentStyle
        }
      >
        {text}
      </li>
    </Link>
  );
}

function CartIcon() {
  return (
    <div className="flex flex-row justify-center items-center">
      <ModeToggle />
      <Link href="/korpa">
        <div className="relative ml-6 mr-3">
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
            12
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-lightMode-text dark:text-darkMode-text"
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
  );
}

function MobileMenuToggle({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  return (
    <div className="flex items-center gap-6 lg:hidden">
      <button className="ml-4 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <XIcon className="text-lightMode-text dark:text-darkMode-text" />
        ) : (
          <Menu className="text-lightMode-text dark:text-darkMode-text" />
        )}
      </button>
      <CartIcon />
    </div>
  );
}

function MobileMenu({
  pathname,
  setIsMenuOpen,
}: {
  pathname: string;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed font-bold w-full h-fit bg-lightMode-background dark:bg-darkMode-background flex flex-col items-center gap-6 py-4 z-10 lg:hidden">
      {navigationLinks.map((link) =>
        link.subLinks ? (
          <NavigationMenu key={link.text}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{link.text}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 text-nowrap">
                    {link.subLinks.map((subLink) => (
                      <NavListItem
                        key={subLink.text}
                        href={subLink.href}
                        text={subLink.text}
                        pathname={pathname}
                        onClick={() => setIsMenuOpen(false)}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <NavLink
            key={link.text}
            href={link.href}
            text={link.text}
            pathname={pathname}
            onClick={() => setIsMenuOpen(false)}
          />
        ),
      )}
    </div>
  );
}
