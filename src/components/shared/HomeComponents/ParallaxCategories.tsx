"use client";

import { Parallax } from "react-scroll-parallax";
import CategoriesInfoSection from "@/components/shared/Landing/Sections/CategoriesSection";

export default function ParallaxCategories() {
  return (
    <Parallax>
      <div className="flex items-start">
        <CategoriesInfoSection />
      </div>
    </Parallax>
  );
}
