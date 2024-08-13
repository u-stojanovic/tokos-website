"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { RectangleHorizontal, Square } from "lucide-react";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [weight, setWeight] = useState<number>(0.5);
  const handleWeightChange = (value: number[]) => {
    setWeight(value[0]);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <Swiper
            modules={[Navigation, EffectFade, Thumbs]}
            loop={false}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            effect="fade"
            thumbs={{ swiper: thumbsSwiper }}
            className="w-full h-auto"
          >
            {product.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <Image
                  src={image.imageUrl}
                  alt={`${product.name} image ${index + 1}`}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            className="w-full h-auto"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <Image
                  src={image.imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-lightMode-text dark:text-darkMode-text">
            {product.name}
          </h1>
          <div className="text-xl text-gray-500 dark:text-darkMode-primary">
            {product.description}
          </div>
          <div className="text-3xl font-poppins text-lightMode-text dark:text-darkMode-text">
            {product.price ? product.price : 20} RSD
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <div className="group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-background dark:hover:bg-darkMode-background rounded-lg">
              <div className="flex items-center justify-center text-gray-300 rounded-lg w-20 h-20">
                <RectangleHorizontal className="w-12 h-12 stroke-[1.5]" />
              </div>
              <span className="text-gray-300 mt-2">Mala</span>
            </div>

            <div className="group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-background dark:hover:bg-darkMode-background rounded-lg">
              <div className="flex items-center justify-center text-gray-300 rounded-lg w-20 h-20">
                <Square className="w-16 h-16 stroke-[1.5]" />
              </div>
              <span className="text-gray-300 mt-2">Velika</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button
              size="lg"
              className="bg-lightMode-primary text-lightMode-text dark:bg-darkMode-primary dark:text-lightMode-text"
            >
              Dodaj u korpu
            </Button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-lightMode-text dark:text-darkMode-text">
              Kategorija
            </h2>
            <p className="text-lg text-gray-600 dark:text-darkMode-primary">
              {product.category.name}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-lightMode-text dark:text-darkMode-text">
              Sastojci
            </h2>
            <div className="text-lg text-gray-600 dark:text-darkMode-primary">
              {product.ingredients
                .map(({ ingredient }) => ingredient.name)
                .join(", ")}
            </div>
            <h2 className="text-2xl font-semibold text-lightMode-text dark:text-darkMode-text">
              Alergeni
            </h2>
            <div className="text-lg text-gray-600 dark:text-darkMode-primary">
              {product.ingredients.some(
                ({ ingredient }) => ingredient.isAlergen,
              )
                ? product.ingredients
                    .filter(({ ingredient }) => ingredient.isAlergen)
                    .map(({ ingredient }) => ingredient.name)
                    .join(", ")
                : "Nema alergena"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
