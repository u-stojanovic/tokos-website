import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function ShopInfoSection() {
  return (
    <section className="w-full h-screen bg-green-600 py-12 md:py-24">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tokos najjaca prodavnica
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Discover a curated collection of stylish home decor and furnishings
            to transform your living space.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 1"
              width={500}
              height={400}
              className="object-cover w-full h-64 group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Cozy Throw Blanket</h3>
              <p className="text-base font-medium">$39.99</p>
              <Button size="sm" className="mt-2">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 2"
              width={500}
              height={400}
              className="object-cover w-full h-64 group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Minimalist Vase</h3>
              <p className="text-base font-medium">$24.99</p>
              <Button size="sm" className="mt-2">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 3"
              width={500}
              height={400}
              className="object-cover w-full h-64 group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Rustic Wood Shelves</h3>
              <p className="text-base font-medium">$59.99</p>
              <Button size="sm" className="mt-2">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Product 4"
              width={500}
              height={400}
              className="object-cover w-full h-64 group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Decorative Pillows</h3>
              <p className="text-base font-medium">$29.99</p>
              <Button size="sm" className="mt-2">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
