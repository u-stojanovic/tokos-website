import {
  CakeIcon,
  CookieIcon,
  CandyIcon,
  PieChartIcon,
  AppleIcon,
  TractorIcon,
} from "lucide-react";

export default function CategoriesInfoSection() {
  return (
    <section className="w-full py-12 h-full bg-gray-800 md:py-20">
      <div className="container grid gap-8 px-4 md:px-6 max-w-6xl">
        <div className="grid gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          <p className="text-muted-foreground">
            Explore our delectable selection of sweet treats.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="grid gap-4 items-center justify-center text-center">
            <div className="bg-primary rounded-full p-4 text-primary-foreground">
              <CakeIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Cakes</h3>
          </div>
          <div className="grid gap-4 items-center justify-center text-center">
            <div className="bg-secondary rounded-full p-4 text-secondary-foreground">
              <CookieIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Cookies</h3>
          </div>
          <div className="grid gap-4 items-center justify-center text-center">
            <div className="bg-accent rounded-full p-4 text-accent-foreground">
              <CandyIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Candies</h3>
          </div>
          <div className="grid gap-4 items-center justify-center text-center">
            <div className="bg-primary rounded-full p-4 text-primary-foreground">
              <PieChartIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Pies</h3>
          </div>
          <div className="grid gap-4 items-center justify-center text-center">
            <div className="bg-secondary rounded-full p-4 text-secondary-foreground">
              <CookieIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Brownies</h3>
          </div>
          <div className="grid gap-4 items-center justify-center text-center">
            <div className="bg-accent rounded-full p-4 text-accent-foreground">
              <CakeIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Cupcakes</h3>
          </div>
          <div className="grid gap-4 items-center justify-center text-center">
            <div className="bg-primary rounded-full p-4 text-primary-foreground">
              <AppleIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Macarons</h3>
          </div>
          <div className="grid gap-4 items-center justify-center text-center">
            <div className="bg-secondary rounded-full p-4 text-secondary-foreground">
              <TractorIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold">Truffles</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
