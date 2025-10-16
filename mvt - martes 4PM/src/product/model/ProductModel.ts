import Product from '../types/Product'
import products from '../../../database/products.json'

export default class ProductModel {
  readonly fetchProducts = async (): Promise<Product[]> => {
    const data = products as Product[]
    if (!data) {
      throw new Error('No products found')
    }
    return data
  }
}
