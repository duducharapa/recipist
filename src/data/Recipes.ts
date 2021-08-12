import Recipe from '../models/Recipe';

const invalidRecipe = new Recipe(0, "");
const recipes = [
  new Recipe(1, "teste 1", "teste de descricao"),
  new Recipe(2, "teste 2")
];

export function findRecipe(id: number): Recipe {
  return recipes.find((p: Recipe) => p.id === id) || invalidRecipe;
}

export default recipes;