import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core';
import image from "../assets/petit-gateau.jpg";

interface RecipeCardProps {
  title: string,
  description?: string
}

function RecipeCard(props: RecipeCardProps) {
  
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description || ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => alert('Not implemented yet')}>
          Ver
        </Button>
        <Button size="small" color="primary" variant="contained" onClick={() => alert('Not implemented yet')}>
          Fazer receita
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;