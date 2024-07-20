import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-muted-foreground py-8 sm:py-12 h-fit">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <HomeIcon className="w-6 h-6" />
            <span className="font-bold text-lg">Tokos</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Welcome to Sweet House, your one-stop shop for all things sweet and
            delightful. Discover a wide range of high-quality products to
            satisfy your cravings.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-base">Quick Links</h3>
          <nav className="grid gap-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-base">Categories</h3>
          <nav className="grid gap-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Cakes
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Cookies
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Candies
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Pastries
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-base">Contact</h3>
          <nav className="grid gap-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              info@sweethouse.com
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              +1 (234) 567-890
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Visit our store
            </Link>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2024 Sweet House. All rights reserved.</p>
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
  );
}
