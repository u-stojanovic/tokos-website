import React from "react";

export default function ListingProductsSkeletonLoader() {
  return (
    <div className="relative w-screen py-16 h-full md:py-24 text-lightMode-text dark:text-darkMode-text bg-lightMode-surface dark:bg-darkMode-surface">
      <div className="relative z-10 container mx-auto grid gap-12 px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center bg-lightMode-background dark:bg-darkMode-background rounded-lg shadow-md transition-all duration-300 transform-gpu"
            >
              <div className="relative w-full h-80 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-t-lg overflow-hidden"></div>
              <div className="p-4 w-full flex flex-col items-center">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 animate-pulse rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded w-2/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded w-1/4 mb-4"></div>
                <div className="h-10 bg-gray-300 dark:bg-gray-700 animate-pulse rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
