import React from "react";

type PageTitleProps = {
  title: string;
};

const ProductsTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="grid gap-4 text-center text-lightMode-text dark:text-darkMode-text md:text-left md:mt-6">
      <h1 className="text-4xl font-raleway tracking-tight md:ml-32">{title}</h1>
      <div className="w-full max-w-[85%] mx-auto px-1 md:px-2 lg:px-3 h-px bg-gray-400 dark:bg-gray-300 drop-shadow-md my-2 mb-4 z-0"></div>
    </div>
  );
};

export default ProductsTitle;
