"use server";
import prisma from "../../../prisma/client";

export default async function getAllProducts() {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.log("error: ", error);
  }
}
