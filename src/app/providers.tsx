"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // Set default staleTime for queries
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient(); // Server-side: always create a new query client
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient(); // Client-side: reuse the client
    return browserQueryClient;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </QueryClientProvider>
  );
}
