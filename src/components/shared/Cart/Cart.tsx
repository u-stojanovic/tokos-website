"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { XIcon } from "lucide-react";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="relative p-2 hover:bg-transparent inline-flex items-center justify-center"
          style={{ width: "auto", minWidth: "auto" }}
        >
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs">
            12
          </span>
          <CartIconSVG />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-xs h-auto bg-background shadow-lg"
      >
        <SheetHeader className="flex items-center justify-between border-b border-muted px-6 py-4">
          <SheetTitle className="text-xl font-semibold">Your Cart</SheetTitle>
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
            >
              <XIcon className="h-5 w-5" />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="p-6 space-y-4">
          <p>Your cart items will appear here.</p>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <Button>Checkout</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function CartIconSVG() {
  return (
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
  );
}
