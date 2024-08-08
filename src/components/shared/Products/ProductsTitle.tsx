import React from "react";

type PageTitleProps = {
  title: string;
};

const ProductsTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="grid gap-4 text-left text-lightMode-text dark:text-darkMode-text mt-6">
      <h1 className="text-4xl font-raleway tracking-tight ml-8">{title}</h1>
      <div className="w-full max-w-[95%] mx-auto px-1 md:px-2 lg:px-3 h-px bg-gray-400 dark:bg-gray-300 drop-shadow-md my-2 mb-4 z-0"></div>
    </div>
  );
};

export default ProductsTitle;
