import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Recipe from '../models/Recipe';

import RecipeCard from './RecipeCard';

const styles = makeStyles({
  container: {
    marginTop: 20,
  }
});

interface RecipeListProps {
  data: Recipe[],
  title: string
}

function RecipeList(props: RecipeListProps) {
  const classes = styles();
  
  return (
    <Container className={classes.container}>
      <Typography variant="h5" color="primary" gutterBottom>
        {props.title}
      </Typography>
      <Grid container spacing={2}>
        {
          props.data.map((recipe: Recipe, index: number) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <RecipeCard title={recipe.name} description={recipe.description} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default RecipeList;