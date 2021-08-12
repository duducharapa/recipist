import Ingredient from "./Ingredient";

class Recipe {
  private _id: number = 0;
  private _name: string = "";
  private _description: string = "";
  private _ingredients: Ingredient[] = [];
  
  public constructor(id: number, name: string, description?: string) {
    this._id = id;
    this._name = name;
    if (description) {
      this._description = description;
    }
  }

  public isValid(): boolean {
    return this.id > 0;
  }

  public addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }
}

export default Recipe;