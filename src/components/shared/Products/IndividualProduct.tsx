"use client";

import ProductDetailsSkeleton from "@/app/products/[id]/ProductDetailsSkeleton";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFetchProductById } from "@/lib/hooks/products/useGetProductById";
import { CakeSize, CookieSize, Ingredient } from "@prisma/client";
import { ArrowLeftIcon, RectangleHorizontal, Square } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AddToCartButton from "../Cart/AddToCartButton";

interface Props {
  id: number;
}

export default function ProductPage({ id }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [selectedSize, setSelectedSize] = useState<
    CakeSize | CookieSize | undefined
  >(undefined);

  const { data: product, isLoading } = useFetchProductById(id);

  if (!product && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center m-4">
        <h1 className="text-3xl font-bold text-lightMode-text dark:text-darkMode-text mb-6">
          Product not found
        </h1>
      </div>
    );
  }

  if (!product && isLoading) {
    return <ProductDetailsSkeleton />;
  }

  const handleSizeSelection = (size: CakeSize | CookieSize) => {
    setSelectedSize(size);
  };

  const renderSizeOptions = () => {
    if (product && product.category.name === "kolaci") {
      return (
        <div className="flex flex-row gap-4 mt-4">
          {[
            { label: "1kg", value: CookieSize.ONE_KG },
            { label: "2kg", value: CookieSize.TWO_KG },
            { label: "3kg", value: CookieSize.THREE_KG },
          ].map(({ label, value }, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-surface dark:hover:bg-darkMode-surface rounded-lg ${
                selectedSize === value
                  ? "bg-lightMode-surface dark:bg-darkMode-surface"
                  : ""
              }`}
              onClick={() => handleSizeSelection(value)}
            >
              <div className="flex items-center justify-center text-lightMode-text dark:text-darkMode-text rounded-lg w-20 h-20">
                <span className="text-2xl font-bold">{label}</span>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (product && product.category.name === "torte") {
      return (
        <div className="flex flex-row gap-4 mt-4">
          <div
            className={`group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-surface dark:hover:bg-darkMode-surface rounded-lg ${
              selectedSize === CakeSize.SMALL
                ? "bg-lightMode-surface dark:bg-darkMode-surface"
                : ""
            }`}
            onClick={() => handleSizeSelection(CakeSize.SMALL)}
          >
            <div className="flex items-center justify-center text-lightMode-text dark:text-darkMode-text rounded-lg w-20 h-20">
              <RectangleHorizontal className="w-12 h-12 stroke-[1.5]" />
            </div>
            <span className="text-lightMode-text dark:text-darkMode-text mt-1">
              Mala
            </span>
          </div>
          <div
            className={`group flex flex-col items-center cursor-pointer hover:drop-shadow-md hover:bg-lightMode-surface dark:hover:bg-darkMode-surface rounded-lg ${
              selectedSize === CakeSize.BIG
                ? "bg-lightMode-surface dark:bg-darkMode-surface"
                : ""
            }`}
            onClick={() => handleSizeSelection(CakeSize.BIG)}
          >
            <div className="flex items-center justify-center text-lightMode-text dark:text-darkMode-text rounded-lg w-20 h-20">
              <Square className="w-16 h-16 stroke-[1.5]" />
            </div>
            <span className="text-lightMode-text dark:text-darkMode-text mt-1">
              Velika
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="xl:max-w-screen-2xl md:max-w-7xl pt-4 mb-32 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-6">
          <Swiper
            modules={[Navigation, EffectFade, Thumbs]}
            loop={false}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            effect="fade"
            thumbs={{ swiper: thumbsSwiper }}
            className="w-full h-auto"
          >
            {product &&
              product.images.map(
                (image: { imageUrl: string }, index: number) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center"
                  >
                    <Image
                      src={image.imageUrl}
                      alt={`${product.name} image ${index + 1}`}
                      loading="lazy"
                      width={1500}
                      height={1500}
                      className="object-cover rounded-lg max-h-[600px]"
                    />
                  </SwiperSlide>
                ),
              )}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode
            watchSlidesProgress
            className="w-full h-auto"
          >
            {product &&
              product.images.map(
                (image: { imageUrl: string }, index: number) => (
                  <SwiperSlide key={index} className="cursor-pointer">
                    <Image
                      src={image.imageUrl}
                      alt={`Thumbnail ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ),
              )}
          </Swiper>
        </div>
        {showDetails ? (
          <div className="grid gap-6 bg-lightMode-background dark:bg-darkMode-background shadow-lg rounded-lg p-6">
            <div className="flex justify-between border-b border-muted pb-4">
              <h1 className="text-3xl font-bold">{product && product.name}</h1>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowDetails(false)}
              >
                <ArrowLeftIcon className="w-6 h-6" />
                <span className="sr-only">Go back</span>
              </Button>
            </div>
            <div className="grid gap-4">
              {product && renderSizeOptions()}
              <Label htmlFor="note" className="text-base m-0 p-0">
                Napomena:
              </Label>
              <div className="text-lightMode-text dark:text-darkMode-text text-base">
                Ukoliko želite drugačije detalje u odnosu na prikazanu
                dekoraciju torte, molimo Vas da to navedete ovde:
              </div>
              <Textarea
                placeholder="Unesite dodatne detalje"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                className="p-4 min-h-[200px] bg-lightMode-background dark:bg-darkMode-background dark:border-darkMode-primary dark:text-white dark:placeholder-darkMode-text"
              />
              <AddToCartButton
                product={product as any}
                description={additionalDetails}
                option={selectedSize}
                selectedSize={selectedSize}
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-6 bg-lightMode-background dark:bg-darkMode-background shadow-lg rounded-lg p-6">
            <div className="border-b border-muted pb-4">
              <h1 className="text-3xl font-bold">{product && product.name}</h1>
            </div>
            <div className="grid gap-6">
              <div>
                <h2 className="text-lg font-semibold">Opis proizvoda</h2>
                <p className="text-lightMode-text dark:text-darkMode-text text-base">
                  {product && product.description}
                </p>
              </div>
              <div className="text-4xl font-bold">
                {product && product.price ? product.price : 20} RSD
              </div>
              <Button
                size="lg"
                className="bg-lightMode-primary text-lightMode-text dark:bg-darkMode-primary dark:text-lightMode-text text-lg font-bold"
                onClick={() => setShowDetails(true)}
              >
                Dodaj u korpu
              </Button>
            </div>
            <div className="grid gap-6">
              <div>
                <h2 className="text-lg font-semibold">Kategorija</h2>
                <p className="text-lightMode-text dark:text-darkMode-text text-base">
                  {product && product.category.name}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Sastojci</h2>
                <p className="text-lightMode-text dark:text-darkMode-text text-base">
                  {product &&
                    product.ingredients
                      .map(
                        ({ ingredient }: { ingredient: Ingredient }) =>
                          ingredient.name,
                      )
                      .join(", ")}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Alergeni</h2>
                <p className="text-lightMode-text dark:text-darkMode-text text-base">
                  {product &&
                  product.ingredients.some(
                    ({ ingredient }: { ingredient: Ingredient }) =>
                      ingredient.isAlergen,
                  )
                    ? product.ingredients
                        .filter(
                          ({ ingredient }: { ingredient: Ingredient }) =>
                            ingredient.isAlergen,
                        )
                        .map(
                          ({ ingredient }: { ingredient: Ingredient }) =>
                            ingredient.name,
                        )
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
