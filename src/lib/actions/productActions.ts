"use server";
import { cookies } from "next/headers";
import prisma from "../../../prisma/client";

export async function getAllProducts(page: number = 1, pageSize: number = 12) {
  const _ = cookies();
  try {
    const skip = (page - 1) * pageSize;
    const products = await prisma.product.findMany({
      skip,
      take: pageSize,
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

    const totalProducts = await prisma.product.count();

    return { products, totalProducts };
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
