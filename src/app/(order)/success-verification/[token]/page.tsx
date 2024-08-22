"use client";

import { Button } from "@/components/ui/button";
import { CircleCheckIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function OrderVerified({
  params,
}: {
  params: { token: string };
}) {
  React.useEffect(() => {
    if (!params.token) {
      redirect("/");
    }

    const wsUrl =
      process.env.NODE_ENV === "production"
        ? (process.env.NEXT_PUBLIC_WS_URL_PROD as string)
        : (process.env.NEXT_PUBLIC_WS_URL_DEV as string);

    // NOTE: Establish WebSocket connection
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("WebSocket is open now.");
      ws.send(JSON.stringify({ event: "new_order", data: params.token }));
    };

    ws.onmessage = (event) => {
      console.log("Message received from server:", event.data);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket is closed now.");
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [params.token]);

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
