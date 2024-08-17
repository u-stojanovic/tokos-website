import Image from "next/image";
import { CategoriesData } from "@/data/categories";
import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section className="relative w-full py-16 h-full md:py-24 text-lightMode-text dark:text-darkMode-text bg-lightMode-surface dark:bg-darkMode-surface">
      <div className="relative z-10 container mx-auto grid gap-12 px-4 md:px-6 max-w-7xl">
        <div className="grid gap-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Kategorije</h2>
          <p className="text-lg text-lightMode-text dark:text-darkMode-text">
            Istražite naš asortiman slatkih poslastica.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {CategoriesData.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              image={category.image}
              // count={category.count}
              icon={category.icon}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  // count: number;
  icon: React.ReactNode;
  link: string;
}

function CategoryCard({
  title,
  description,
  image,
  // count,
  icon,
  link,
}: CategoryCardProps) {
  return (
    <Link
      href={link}
      className="relative flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform-gpu will-change-transform hover:-translate-y-2"
    >
      <div className="relative w-full h-80 font-semibold rounded-lg overflow-hidden group">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="object-cover opacity-65 transition-transform duration-300 transform-gpu will-change-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center p-4">
          <div className="p-2 bg-primary rounded-full text-primary-foreground">
            {icon}
          </div>
          <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-md text-gray-300">{description}</p>
          {/* <p className="mt-1 text-md text-gray-400">{count} products</p> */}
        </div>
      </div>
    </Link>
  );
}
