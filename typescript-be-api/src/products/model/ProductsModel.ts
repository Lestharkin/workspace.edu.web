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

  getProductById = async (id: number): Promise<ProductInterface> => {
    return await new Promise((resolve, reject) => {
      try {
        const product = products.find((product) => product.id === id)
        if (product !== undefined) {
          resolve(product as ProductInterface)
        } else {
          reject(new Error('Product not found'))
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}
