"use server";

import { OrderFormInputs } from "@/app/porudzbine/form";
import prisma from "../../../prisma/client";

export async function createOrder(formValues: OrderFormInputs) {
  try {
  } catch (error) {
    console.log("error: ", error);
  }
}
