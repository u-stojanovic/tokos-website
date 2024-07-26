import React from "react";
import Image from "next/image";

interface BannerProps {
  imageSrc: string;
  title: string;
  description?: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="relative h-[60vh] w-full bg-lightMode-background dark:bg-darkMode-background">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-opacity-10 dark:bg-opacity-50 bg-lightMode-background dark:bg-darkMode-background p-4">
        <h1 className="text-4xl font-raleway font-bold">{title}</h1>
        {description && <p className="mt-2 text-lg">{description}</p>}
      </div>
    </div>
  );
};

export default Banner;
