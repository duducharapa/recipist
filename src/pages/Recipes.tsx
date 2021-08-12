import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import List from "../components/List";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/Recipes";

function Recipes() {
  return (
    <>
      <List title="Produtos" component={RecipeCard} data={recipes} />
      <Container>
        <Button color="primary" variant="contained" fullWidth={true} component={Link} to="/recipes/add">
          Adicionar receita
        </Button>
      </Container>
    </>
  );
}

export default Recipes;