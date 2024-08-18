"use client";

import { Button } from "@/components/ui/button";
import { CircleXIcon } from "lucide-react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

export default function OrderFailed() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center justify-center gap-4">
          <CircleXIcon className="text-red-500 w-12 h-12" />
          <h2 className="text-2xl font-bold">Porudžbina Nije Uspela</h2>
          <p className="text-muted-foreground text-center">
            Žao nam je, došlo je do problema sa vašom porudžbinom. Molimo vas
            pokušajte ponovo ili kontaktirajte naš tim za podršku ako vam je
            potrebna pomoć.
          </p>
          <Link href="/">
            <Button size="lg" className="w-full">
              Vrati se na Početnu Stranu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
