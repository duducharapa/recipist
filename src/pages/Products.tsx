import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import List from "../components/List";
import ProductCard from "../components/ProductCard";
import products from "../data/Products";

function Products() {
  return (
    <>
      <List title="Produtos" component={ProductCard} data={products} />
      <Container>
        <Button color="primary" variant="contained" fullWidth={true} component={Link} to="/products/add">
          Adicionar receita
        </Button>
      </Container>
    </>
  );
}

export default Products;