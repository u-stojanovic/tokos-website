"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ParallaxProvider>
  );
}
