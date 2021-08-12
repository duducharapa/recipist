class Ingredient {
  private _id: number = 0;
  private _quantity: number = 0;
  private _type: string = "";

  public constructor(id: number, type: string, quantity?: number) {
    this._id = id;
    this._type = type;
    if (quantity && quantity >= 0) {
      this._quantity = quantity;
    }
  }

  public get id(): number {
    return this._id;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public get type(): string {
    return this._type;
  }
}

export default Ingredient;