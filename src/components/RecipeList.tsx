import {
  Container,
  Grid,
  Theme,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import RecipeCard from './RecipeCard';

const styles = makeStyles({
  container: {
    marginTop: 20,
  }
});

function RecipeList() {
  const classes = styles();
  
  return (
    <Container className={classes.container}>
      <Typography variant="h5" color="primary" gutterBottom>
        Opa, você pode fazer:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <RecipeCard title="Teste 1" description="Teste da descrição" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RecipeCard title="Teste 2" description="Esse já tem outra" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RecipeCard title="Teste 3" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default RecipeList;