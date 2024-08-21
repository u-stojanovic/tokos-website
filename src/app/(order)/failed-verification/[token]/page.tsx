"use client";

import { Button } from "@/components/ui/button";
import { CircleXIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function OrderFailed({ params }: { params: { token: string } }) {
  if (!params.token) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <CircleXIcon className="text-red-500 w-16 h-16" />
          <h2 className="text-3xl font-bold text-gray-800">
            Porudžbina Nije Uspela
          </h2>
          <p className="text-gray-600">
            Žao nam je, došlo je do problema sa vašom porudžbinom. Molimo vas
            pokušajte ponovo ili kontaktirajte naš tim za podršku ako vam je
            potrebna pomoć.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Vrati se na Početnu Stranu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
