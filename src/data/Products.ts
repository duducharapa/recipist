import Product from "../models/Product";

const products = [
  new Product(1, "Arroz tio joão", "arroz", 2),
  new Product(2, "Queijo minas", "queijo")
];

export function findProduct(id: number): Product {
  return products.find((p: Product) => p.id === id) || new Product(0, "", "desconhecido");
}

export default products;