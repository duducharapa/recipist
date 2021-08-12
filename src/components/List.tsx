import { createElement } from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import EmptyList from "./EmptyList";

interface ListProps {
  component: any
  data: any[]
  title: string
}

const styles = makeStyles({
  container: {
    marginTop: 20,
    marginBottom: 20,
  }
});

function List({ component, title, data }: ListProps) {
  const classes = styles();
  
  return (
    <Container className={classes.container}>
      <Typography variant="h5" color="primary" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {
          data.length ? data.map((value) => (
            <Grid item xs={12} sm={6} md={3}>
              {createElement(component, { data: value })}
            </Grid>
          )) : <EmptyList />
        }
      </Grid>
    </Container>
  );
}

export default List;