"use server";
import prisma from "../../../prisma/client";

export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        images: true,
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
    return products;
  } catch (error) {
    console.log("error: ", error);
  }
}

export async function getProductById(id: number) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: {
        category: true,
        images: true,
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
    return product;
  } catch (error) {
    console.log("error: ", error);
  }
}
