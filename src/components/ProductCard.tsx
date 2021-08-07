import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

interface ProductCardProps {
  title: string
  quantity: number
  type: string
}

function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {props.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Ver</Button>
        <Button size="small" color="primary" variant="contained">Receitas relacionadas</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;