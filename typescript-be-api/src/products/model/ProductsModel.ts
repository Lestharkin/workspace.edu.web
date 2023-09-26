import { ProductInterface } from '../types/ProductInterface'
import products from '../database/products.json'

export default class ProductsModel {
  getProducts = async (): Promise<ProductInterface[]> => {
    return await new Promise((resolve, reject) => {
      try {
        resolve(products)
      } catch (error) {
        reject(error)
      }
    })
  }
}
