"use client";
import { Parallax } from "react-scroll-parallax";
import CategoriesInfoSection from "./CategoriesSection";
import ShopInfoSection from "./ShopInfoSection";

export default function Main() {
  return (
    <>
      <Parallax>
        <ShopInfoSection />
      </Parallax>
      <Parallax speed={-10}>
        <CategoriesInfoSection />
      </Parallax>
    </>
  );
}
