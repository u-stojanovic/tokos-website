import { Category, Image, Ingredient } from "@prisma/client";

export type ProductIngredient = {
  productId: number;
  ingredientId: number;
  ingredient: Ingredient;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number | null;
  categoryId: number;
  images: Image[];
  category: Category;
  ingredients: ProductIngredient[];
};
