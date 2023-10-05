import products from '../database/products.json'
import ProductInterface from '../types/ProductInterface'

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
          const p = { ...product, ...{ img: `${product.id}.jpg` } }
          resolve(p as ProductInterface)
        } else {
          reject(new Error('Product not found'))
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  getProductsByPrice = async (min: number, max: number): Promise<ProductInterface[]> => {
    return await new Promise((resolve, reject) => {
      try {
        const productsByPrice = products.filter((product) => product.price >= min && product.price <= max)
        resolve(productsByPrice)
      } catch (error) {
        reject(error)
      }
    })
  }
}
