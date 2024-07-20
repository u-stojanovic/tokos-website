"use client";
import { Parallax } from "react-scroll-parallax";
import CategoriesInfoSection from "./CategoriesSection";
import ShopInfoSection from "./ShopInfoSection";

export default function Main() {
  return (
    <Parallax className="h-screen">
      <ShopInfoSection />
      <Parallax speed={-10}>
        <CategoriesInfoSection />
      </Parallax>
    </Parallax>
  );
}
