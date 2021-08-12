import { useParams } from "react-router-dom";
import { findRecipe } from "../data/Recipes";
import Recipe from "../models/Recipe";

interface routerProps {
  id: string
}

function RecipePage() {
  const { id }: routerProps = useParams();
  const recipe: Recipe = findRecipe(parseInt(id));

  return recipe ? (
      <h1>teste</h1>
    ) : (
      <h1>Produto não encontrado</h1>
    );
}

export default RecipePage;