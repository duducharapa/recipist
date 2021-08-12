import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Product from "../models/Product";

interface ProductCardProps {
  data: Product
}

function ProductCard({ data }: ProductCardProps) {
  const { id, name, quantity, type }: Product = data;
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {type}
        </Typography>
        <Typography color="primary">
          Você possui:
          <Typography color="textPrimary">
            {quantity}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/products/${id}`} size="small" color="primary">
          Ver
        </Button>
        <Button size="small" color="primary" variant="contained" component={Link} to={`/products/related/${id}`}>
          Receitas relacionadas
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;