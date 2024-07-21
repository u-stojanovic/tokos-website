"use client";
import { Parallax } from "react-scroll-parallax";
import CategoriesInfoSection from "./CategoriesSection";
import ShopInfoSection from "./ShopInfoSection";

export default function Main() {
  return (
    <>
      <Parallax>
        <div className="items-center justify-center">
          <ShopInfoSection />
        </div>
      </Parallax>
      <Parallax>
        <div className="items-center justify-center">
          <CategoriesInfoSection />
        </div>
      </Parallax>
    </>
  );
}
