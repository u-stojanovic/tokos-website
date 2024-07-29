import { Product } from "@prisma/client";

type ListAllProductsProps = {
  products: Product[];
};

export default function ListAllProducts({ products }: ListAllProductsProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}
