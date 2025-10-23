import products_json from '../../../database/products.json'
import Product from '../types/Product'

export default class ProductModel {
  readonly getAllProducts = (): Product[] => {
    return products_json as Product[]
  }
}
