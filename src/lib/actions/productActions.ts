"use server";

import { cookies } from "next/headers";
import prisma from "../../../prisma/client";

export async function getAllProducts() {
  const _ = cookies();
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

export async function getProductsByCategory(category: string) {
  const _ = cookies();
  try {
    const foundCatagory = await prisma.category.findFirst({
      where: {
        name: category,
      },
    });

    if (!foundCatagory) {
      return;
    }

    const products = await prisma.product.findMany({
      where: {
        categoryId: foundCatagory.id,
      },
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
