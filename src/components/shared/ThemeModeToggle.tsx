"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border-none ring-0 outline-none relative flex items-center justify-center hover:bg-transparent transition-all active:bg-transparent focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-lightMode-text" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-darkMode-text" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-lightMode-background dark:bg-darkMode-background"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="hover:bg-lightMode-surface dark:hover:bg-darkMode-surface text-lightMode-text dark:text-darkMode-text"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="hover:bg-lightMode-surface dark:hover:bg-darkMode-surface text-lightMode-text dark:text-darkMode-text"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="hover:bg-lightMode-surface dark:hover:bg-darkMode-surface text-lightMode-text dark:text-darkMode-text"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
