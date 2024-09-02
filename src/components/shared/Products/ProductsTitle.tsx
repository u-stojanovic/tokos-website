import React from "react";
import FilterDropdown from "./FilterDropdown";

type PageTitleProps = {
  title: string;
};

const ProductsTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="grid gap-4 text-center text-lightMode-text dark:text-darkMode-text md:text-left md:mt-6 items-center">
      <div className="flex justify-between items-center w-full max-w-[85%] md:max-w-[80%] mx-auto md:ml-28">
        <h1 className="text-3xl md:text-4xl font-raleway tracking-tight">
          {title}
        </h1>
        {title === "Torte" && (
          <div className="ml-auto flex justify-end w-full md:w-auto">
            <FilterDropdown />
          </div>
        )}
      </div>
      <div className="w-full max-w-[85%] mx-auto px-1 md:px-2 lg:px-3 h-px bg-gray-400 dark:bg-gray-300 drop-shadow-md my-2 mb-4 z-0"></div>
    </div>
  );
};

export default ProductsTitle;
