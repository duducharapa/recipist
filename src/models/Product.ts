class Product {
  private _id: number;
  private _name: string = "";
  private _type: string;
  private _quantity: number = 0;
  
  constructor(id: number, name: string, type: string, quantity?: number) {
    this._id = id;
    this._name = name;
    this._type = type;
    if (quantity && quantity >= 0) {
      this._quantity = quantity;
    }
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get type() {
    return this._type;
  }

  public get quantity() {
    return this._quantity;
  }
}

export default Product;