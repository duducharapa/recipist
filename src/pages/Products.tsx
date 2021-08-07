import ProductList from "../components/ProductList";
import products from "../data/Products";

function Products() {
  return (
    <ProductList data={products} />
  );
}

export default Products;