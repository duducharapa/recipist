import RecipeList from "../components/RecipeList";
import recipes from "../data/Recipes";

function Main() {
  return (
    <RecipeList title="Você pode fazer:" data={recipes} />
  );
}

export default Main;