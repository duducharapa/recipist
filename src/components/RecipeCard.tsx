import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Recipe from '../models/Recipe';
import image from "../assets/petit-gateau.jpg";

interface RecipeCardProps {
  data: Recipe
}

function RecipeCard({ data }: RecipeCardProps) {
  const { id, description, name }: Recipe = data;
  
  return (
    <Card>
      <CardMedia component="img" image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={`/recipes/${id}`}>
          Ver
        </Button>
        <Button size="small" color="primary" variant="contained" component={Link} to={`/recipes/make/${id}`}>
          Fazer receita
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;