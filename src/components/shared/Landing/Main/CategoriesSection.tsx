import Image from "next/image";
import {
  CakeIcon,
  CookieIcon,
  CandyIcon,
  PieChartIcon,
  AppleIcon,
  TractorIcon,
} from "lucide-react";

const categories = [
  {
    icon: <CakeIcon className="w-8 h-8" />,
    title: "Cakes",
    description: "Delicious cakes for every occasion.",
    bgClass: "bg-primary",
    textClass: "text-primary-foreground",
  },
  {
    icon: <CookieIcon className="w-8 h-8" />,
    title: "Cookies",
    description: "Crunchy and soft cookies to satisfy your cravings.",
    bgClass: "bg-secondary",
    textClass: "text-secondary-foreground",
  },
  {
    icon: <CandyIcon className="w-8 h-8" />,
    title: "Candies",
    description: "Sweet and delightful candies for everyone.",
    bgClass: "bg-accent",
    textClass: "text-accent-foreground",
  },
  {
    icon: <PieChartIcon className="w-8 h-8" />,
    title: "Pies",
    description: "Homemade pies with various flavors.",
    bgClass: "bg-primary",
    textClass: "text-primary-foreground",
  },
  {
    icon: <CookieIcon className="w-8 h-8" />,
    title: "Brownies",
    description: "Rich and fudgy brownies to indulge in.",
    bgClass: "bg-secondary",
    textClass: "text-secondary-foreground",
  },
  {
    icon: <CakeIcon className="w-8 h-8" />,
    title: "Cupcakes",
    description: "Delightful cupcakes with various toppings.",
    bgClass: "bg-accent",
    textClass: "text-accent-foreground",
  },
  {
    icon: <AppleIcon className="w-8 h-8" />,
    title: "Macarons",
    description: "Colorful and flavorful macarons.",
    bgClass: "bg-primary",
    textClass: "text-primary-foreground",
  },
  {
    icon: <TractorIcon className="w-8 h-8" />,
    title: "Truffles",
    description: "Decadent chocolate truffles.",
    bgClass: "bg-secondary",
    textClass: "text-secondary-foreground",
  },
];

export default function CategoriesInfoSection() {
  return (
    <section className="relative w-full py-12 h-full md:py-20 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1640184713819-69d3195f0b92?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto grid gap-8 px-4 md:px-6 max-w-6xl">
        <div className="grid gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          <p className="text-muted-foreground">
            Explore our delectable selection of sweet treats.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              bgClass={category.bgClass}
              textClass={category.textClass}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
          <p className="mt-4 text-lg text-gray-400">
            At Sweet House, we take pride in offering a wide variety of
            high-quality and delicious treats. Our products are made with the
            finest ingredients to ensure that every bite is a delightful
            experience. Whether you're celebrating a special occasion or simply
            indulging your sweet tooth, we have something for everyone. Discover
            the joy of sweet indulgence with our carefully curated selection of
            cakes, cookies, candies, and more.
          </p>
        </div>
      </div>
    </section>
  );
}

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgClass: string;
  textClass: string;
}

function CategoryCard({
  icon,
  title,
  description,
  bgClass,
  textClass,
}: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`${bgClass} rounded-full p-4 ${textClass}`}>{icon}</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
  );
}
