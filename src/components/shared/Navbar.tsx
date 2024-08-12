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
import Cart from "./Cart/Cart";

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
        className={`fixed top-0 left-0 w-full z-50 ${
          isMenuOpen
            ? "bg-lightMode-background dark:bg-darkMode-background lg:bg-transparent"
            : "bg-gradient-to-b from-lightMode-background to-transparent dark:from-darkMode-background"
        } backdrop-filter backdrop-blur-sm text-lightMode-text dark:text-darkMode-text`}
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
      <div className="flex items-center gap-6">
        <ModeToggle />
        <Cart />
      </div>
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
                  <ul className="grid gap-3 p-4 whitespace-nowrap">
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
      <div className="flex items-center gap-6">
        <ModeToggle />
        <Cart />
      </div>
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
