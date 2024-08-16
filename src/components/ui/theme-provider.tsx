"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Roboto } from "next/font/google";
import { useTheme } from "next-themes";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { theme: nextTheme } = useTheme();

  const muiTheme = React.useMemo(() => {
    return createTheme({
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
      palette: {
        mode: nextTheme === "dark" ? "dark" : "light",
      },
    });
  }, [nextTheme]);

  return (
    <NextThemesProvider {...props}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </NextThemesProvider>
  );
}
