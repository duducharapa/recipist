import List from "../components/List";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/Recipes";

function Main() {
  return (
    <List title="Você pode fazer:" data={recipes} component={RecipeCard} />
  );
}

export default Main;