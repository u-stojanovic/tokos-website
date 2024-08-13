import React from "react";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

export default function ListingProductsSkeletonLoader() {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="flex flex-col items-left gap-4 w-full">
        {/* Title Skeleton */}
        <div className="grid gap-4 text-center md:text-left md:mt-6 rounded-full">
          <Skeleton
            height="40px"
            width="15%"
            startColor="gray.400"
            endColor="gray.600"
            className="mx-auto md:ml-32 rounded-2xl"
          />
          <Skeleton
            height="2px"
            width="85%"
            startColor="gray.400"
            endColor="gray.600"
            className="mx-auto md:ml-32 rounded-2xl"
          />
        </div>

        {/* Products List Skeleton */}
        <div className="relative w-screen py-16 h-full md:py-24 bg-lightMode-surface dark:bg-darkMode-surface">
          <div className="relative z-10 container mx-auto grid gap-12 px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center bg-lightMode-background dark:bg-darkMode-background rounded-lg shadow-md p-4"
                >
                  <Skeleton
                    height="320px"
                    width="100%"
                    startColor="gray.400"
                    endColor="gray.600"
                    className="mb-4 rounded-full"
                  />
                  <SkeletonText
                    mt="4"
                    noOfLines={2}
                    spacing="4"
                    startColor="gray.400"
                    endColor="gray.600"
                    className="rounded-full"
                  />
                  <Skeleton
                    height="20px"
                    width="50%"
                    startColor="gray.400"
                    endColor="gray.600"
                    className="mt-4 rounded-lg"
                  />
                  <Skeleton
                    height="40px"
                    width="100%"
                    startColor="gray.400"
                    endColor="gray.600"
                    className="mt-6 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
