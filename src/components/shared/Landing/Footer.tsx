import Link from "next/link";
import { InboxIcon, SendHorizontal } from "lucide-react";
import { Logo } from "../Products/ui/navbar";

export default function Footer() {
  return (
    <>
      <div className="w-full shadow-2xl"></div>
      <footer className="bg-lightMode-background text-lightMode-text dark:text-darkMode-text py-8 sm:py-12 dark:bg-darkMode-background h-fit shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <p className="text-sm leading-relaxed">
              Dobrodošli u Slatku Kuću, vašu destinaciju za sve slatke i ukusne
              proizvode. Otkrijte širok asortiman visokokvalitetnih proizvoda
              koji će zadovoljiti vaše želje.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold text-base">Brzi Linkovi</h3>
            <nav className="grid gap-1">
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Naslovna
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                O Nama
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                FAQ
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Kontakt
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold text-base">Kategorije</h3>
            <nav className="grid gap-1">
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Svi Proizvodi
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Torte
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Kolači
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Poslastice
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Slani Ketering
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold text-base">Kontakt</h3>
            <nav className="grid gap-1">
              <Link
                href="#"
                className="text-sm hover:underline"
                prefetch={false}
              >
                info@sweethouse.com
              </Link>
              <Link
                href="tel:+381654274270"
                className="text-sm hover:underline"
                prefetch={false}
              >
                +381 (65) 427-427-0
              </Link>
              <Link
                href="https://maps.app.goo.gl/1WkxqP1KXhAvAEet5"
                className="text-sm hover:underline"
                prefetch={false}
              >
                Posetite nas
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold text-base">
              Pretplatite se za novosti i specijalne ponude
            </h3>
            <div className="relative">
              <InboxIcon className="absolute left-3 top-5 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                className="px-10 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white dark:placeholder-white"
                placeholder="Email"
                required
              />
              <SendHorizontal className="absolute right-3 top-5 transform -translate-y-1/2 w-5 h-5 text-pink-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 Tokos. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
