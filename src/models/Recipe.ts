class Recipe {
  private _id: number;
  private _name: string = "";
  private _description: string = "";
  
  constructor(id: number, name: string, description?: string) {
    this._id = id;
    this._name = name;
    if (description) {
      this._description = description;
    }
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get description() {
    return this._description;
  }
}

export default Recipe;