import {
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import ProductCard from './ProductCard';
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
  
  return (
    <Container className={classes.container}>
      <Typography variant="h5" color="primary" gutterBottom>
        Produtos
      </Typography>
      <Grid container spacing={2}>
        {
          props.data.map((product: Product) => (
            <Grid item xs={12} sm={6} md={3}>
              <ProductCard
                title={product.name}
                type={product.type}
                quantity={product.quantity}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default ProductList;