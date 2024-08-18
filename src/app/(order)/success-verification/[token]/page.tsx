"use client";

import { Button } from "@/components/ui/button";
import { CircleCheckIcon } from "lucide-react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

export default function OrderVerified() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center justify-center gap-4">
          <CircleCheckIcon className="text-green-500 w-12 h-12" />
          <h2 className="text-2xl font-bold">
            Porudžbina Uspešno Verifikovana
          </h2>
          <p className="text-muted-foreground text-center">
            Vaša porudžbina je uspešno napravljena. Kontaktiraćemo vas uskoro sa
            dodatnim informacijama o vašoj porudžbini.
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
