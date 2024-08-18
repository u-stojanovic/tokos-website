"use server";

import { OrderFormInputs } from "@/app/porudzbine/form";
import prisma from "../../../prisma/client";

export async function createOrder(formValues: OrderFormInputs) {
  try {
    let orderDeliveryInfo = null;
    if (formValues.city || formValues.address || formValues.zip) {
      orderDeliveryInfo = await prisma.orderDeliveryInformation.create({
        data: {
          city: formValues.city,
          adresa: formValues.address,
          zip: formValues.zip,
        },
      });
    }

    const order = await prisma.order.create({
      data: {
        orderedBy: formValues.orderedBy,
        orderDeliveryInformationId: orderDeliveryInfo?.id || null,
        isOrderVerified: false,
        status: "PENDING",
        userId: formValues.userId || null,
        orderDateTime: new Date(),
      },
    });

    let option = null;
    if (formValues.selectedCakeSize || formValues.selectedCookieSize) {
      option = await prisma.option.create({
        data: {
          cakeSize: formValues.selectedCakeSize || null,
          cookieSize: formValues.selectedCookieSize || null,
        },
      });
    }

    await prisma.orderedProduct.create({
      data: {
        productId: formValues.productId,
        orderId: order.id,
        description: formValues.description,
        optionId: option?.id || null,
        quantity: formValues.quantity,
      },
    });

    // (Optional) Step 5: Return the Complete Order Details
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
