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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState("");

  return (
    <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="space-y-4 md:space-y-6">
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
                  width={200}
                  height={200}
                  className="object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {showDetails ? (
          <div className="grid gap-4 bg-background shadow-lg rounded-lg p-4 sm:p-6">
            <div className="border-b border-muted pb-2 sm:pb-4">
              <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
            </div>
            <div className="grid gap-4">
              <div className="text-muted-foreground text-sm sm:text-base">
                Napomena: Ukoliko želite drugačije detalje u odnosu na prikazanu
                dekoraciju torte, molimo Vas da to navedete ovde:
              </div>
              <Textarea
                placeholder="Unesite dodatne detalje"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                className="p-3 sm:p-4 min-h-[150px] sm:min-h-[200px]"
              />
              <Button
                size="lg"
                className="bg-lightMode-primary text-lightMode-text dark:bg-darkMode-primary dark:text-lightMode-text"
              >
                Dodaj u korpu
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 bg-background shadow-lg rounded-lg p-4 sm:p-6">
            <div className="border-b border-muted pb-2 sm:pb-4">
              <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="size" className="text-sm sm:text-base">
                  Veličina
                </Label>
                {product.category.name.toLowerCase() === "torte" && (
                  <div className="flex flex-row gap-2 mt-2 sm:mt-4">
                    <div className="group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-background dark:hover:bg-darkMode-background rounded-lg">
                      <div className="flex items-center justify-center text-lightMode-text dark:text-darkMode-text rounded-lg w-16 sm:w-20 h-16 sm:h-20">
                        <RectangleHorizontal className="w-8 sm:w-12 h-8 sm:h-12 stroke-[1.5]" />
                      </div>
                      <span className="text-lightMode-text dark:text-darkMode-text mt-1 sm:mt-2">
                        Mala
                      </span>
                    </div>
                    <div className="group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-background dark:hover:bg-darkMode-background rounded-lg">
                      <div className="flex items-center justify-center text-lightMode-text dark:text-darkMode-text rounded-lg w-16 sm:w-20 h-16 sm:h-20">
                        <Square className="w-10 sm:w-16 h-10 sm:h-16 stroke-[1.5]" />
                      </div>
                      <span className="text-lightMode-text dark:text-darkMode-text mt-1 sm:mt-2">
                        Velika
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-3xl sm:text-4xl font-bold">
                {product.price ? product.price : 20} RSD
              </div>
              <Button
                size="lg"
                className="bg-lightMode-primary text-lightMode-text dark:bg-darkMode-primary dark:text-lightMode-text"
                onClick={() => setShowDetails(true)}
              >
                Dodaj u korpu
              </Button>
            </div>
            <div className="grid gap-4">
              <div>
                <h2 className="text-base sm:text-lg font-semibold">
                  Opis proizvoda
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {product.description}
                </p>
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold">Sastojci</h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {product.ingredients
                    .map(({ ingredient }) => ingredient.name)
                    .join(", ")}
                </p>
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-semibold">Alergeni</h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {product.ingredients.some(
                    ({ ingredient }) => ingredient.isAlergen,
                  )
                    ? product.ingredients
                        .filter(({ ingredient }) => ingredient.isAlergen)
                        .map(({ ingredient }) => ingredient.name)
                        .join(", ")
                    : "Ovaj proizvod ne sadrži alergene."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
