"use client";

import { Button } from "@/components/ui/button";
import { CircleCheckIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function OrderVerified({
  params,
}: {
  params: { token: string };
}) {
  if (!params.token) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <CircleCheckIcon className="text-green-500 w-16 h-16" />
          <h2 className="text-3xl font-bold text-gray-800">
            Porudžbina Uspešno Verifikovana
          </h2>
          <p className="text-gray-600">
            Vaša porudžbina je uspešno napravljena. Kontaktiraćemo vas uskoro sa
            dodatnim informacijama o vašoj porudžbini.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Vrati se na Početnu Stranu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
