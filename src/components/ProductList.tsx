import {
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import EmptyList from "./EmptyList";
import ProductCard from "./ProductCard";
import Product from "../models/Product";

interface ProductListProps {
  data: Product[]
}

const styles = makeStyles({
  container: {
    marginTop: 20,
  }
});

function ProductList(props: ProductListProps) {
  const classes = styles();
  
  const resolve = () => {
    return props.data.length ? props.data.map((product: Product) => (
      <Grid item xs={12} sm={6} md={3}>
        <ProductCard data={product} />
      </Grid>
    )) : <EmptyList />
  }

  return (
    <Container className={classes.container}>
      <Typography variant="h5" color="primary" gutterBottom>
        Produtos
      </Typography>
      <Grid container spacing={2}>
        {resolve()}
      </Grid>
    </Container>
  );
}

export default ProductList;