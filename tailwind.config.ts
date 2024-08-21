import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#5A2B0C", // Dark Brown
          foreground: "#F7BFB4", // Light Pink
        },
        secondary: {
          DEFAULT: "#D89E94", // Soft Brown
          foreground: "#5A2B0C", // Dark Brown
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F7BFB4", // Light Pink
          foreground: "#5A2B0C", // Dark Brown
        },
        accent: {
          DEFAULT: "#FFF5F0", // Cream
          foreground: "#5A2B0C", // Dark Brown
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#FFF5F0", // Cream
          foreground: "#5A2B0C", // Dark Brown
        },
        // Light mode colors
        lightMode: {
          background: "#FFFFFF", // White
          text: "#5A2B0C", // Dark Brown
          primary: "#F7BFB4", // Light Pink
          secondary: "#D89E94", // Soft Brown
          surface: "#FFF5F0", // Cream
        },
        // Dark mode colors
        darkMode: {
          background: "#2E2E2E", // Dark Gray
          text: "#F7BFB4", // Light Pink
          primary: "#D89E94", // Soft Brown
          secondary: "#5A2B0C", // Dark Brown
          surface: "#3E3E3E", // Medium Gray
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
