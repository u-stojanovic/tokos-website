import { OrderStatus } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ message: "No token found" }, { status: 400 });
  }

  try {
    const order = await prisma.order.findUnique({
      where: { verificationToken: token },
    });

    if (!order) {
      return NextResponse.redirect(
        new URL(`/failed-verification/${token}`, request.url),
      );
    }

    await prisma.order.update({
      where: { id: order.id },
      data: {
        isOrderVerified: true,
        status: OrderStatus.Ordered,
      },
    });

    return NextResponse.redirect(
      new URL(`/success-verification/${token}`, request.url),
    );
  } catch (e) {
    console.error({ e });
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
