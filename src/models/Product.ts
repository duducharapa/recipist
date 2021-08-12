class Product {
  private _id: number = 0;
  private _name: string = "";
  private _type: string = "";
  private _quantity: number = 0;
  
  public constructor(id?: number, name?: string, type?: string, quantity?: number) {
    if (id) this._id = id;
    if (name) this._name = name;
    if (type) this._type = type;
    if (quantity && quantity >= 0) this._quantity = quantity;
  }

  public isValid(): boolean {
    return this.id > 0;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get type(): string {
    return this._type;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set name(name: string) {
    this._name = name;
  }
}

export default Product;