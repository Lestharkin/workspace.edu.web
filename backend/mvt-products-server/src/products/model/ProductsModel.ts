import products_json from "../database/products.json"
import ProductInterface from "../types/ProductInterface"

export default class ProductsModel{
  private data: ProductInterface[]
  private index: number

  constructor(){
    this.data = []
    this.index = 0
  }

  public init = (): void => {
    this.data = products_json
  }

  public next = (): ProductInterface => {
    if(this.index >= this.data.length){
      this.index = 0
    }
    return this.data[this.index++] as ProductInterface
  }

  public prev = (): ProductInterface => {
    if(this.index === 0){
      this.index = this.data.length - 1
    }
    return this.data[this.index--] as ProductInterface
  }
}