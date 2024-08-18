"use server";

import { OrderFormInputs } from "@/app/porudzbine/form";
import { CartItem } from "@/context/CartContext";
import { CakeSize, CookieSize, OrderStatus } from "@prisma/client";
import prisma from "../../../prisma/client";
import {
  generateVerificationToken,
  sendOrderVerificationEmail,
} from "./mailActions";

export async function createOrder(
  formValues: OrderFormInputs & { cartItems: CartItem[] },
) {
  try {
    let orderDeliveryInfo = null;
    if (
      formValues.scheduleDelivery &&
      formValues.city &&
      formValues.address &&
      formValues.zip &&
      formValues.date
    ) {
      orderDeliveryInfo = await prisma.orderDeliveryInformation.create({
        data: {
          city: formValues.city,
          adresa: formValues.address,
          zip: formValues.zip,
        },
      });
    }

    const verificationToken = generateVerificationToken();

    const order = await prisma.order.create({
      data: {
        orderedBy: formValues.email,
        orderDeliveryInformationId: orderDeliveryInfo?.id || null,
        isOrderVerified: false,
        status: OrderStatus.Pending,
        orderDateTime: formValues.date,
        createdAt: new Date(),
        verificationToken,
      },
    });

    for (const item of formValues.cartItems) {
      const orderedProduct = await prisma.orderedProduct.create({
        data: {
          productId: item.product.id,
          orderId: order.id,
          description: item.description,
          quantity: item.quantity,
        },
      });

      if (item.option) {
        if (Object.values(CakeSize).includes(item.option as CakeSize)) {
          await prisma.option.create({
            data: {
              cakeSize: item.option as CakeSize,
              orderedProductId: orderedProduct.id,
            },
          });
        } else if (
          Object.values(CookieSize).includes(item.option as CookieSize)
        ) {
          await prisma.option.create({
            data: {
              cookieSize: item.option as CookieSize,
              orderedProductId: orderedProduct.id,
            },
          });
        }
      }
    }

    await sendOrderVerificationEmail(formValues.email, verificationToken);

    const completeOrder = await prisma.order.findUnique({
      where: { id: order.id },
      include: {
        orderedProducts: {
          include: {
            product: true,
            option: true,
          },
        },
        OrderDeliveryInformation: true,
        completedBy: true,
      },
    });

    return completeOrder;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Failed to create order");
  } finally {
    prisma.$disconnect();
  }
}
