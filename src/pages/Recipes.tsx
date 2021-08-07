import RecipeList from "../components/RecipeList";
import recipes from "../data/Recipes";

function Recipes() {
  return (
    <RecipeList title="Receitas:" data={recipes} />
  );
}

export default Recipes;