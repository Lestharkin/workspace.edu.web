import products from '../database/products.json'
import ProductInterface from "../types/ProductInterface"

export default class ProductModel {
  getProducts = async (): Promise<ProductInterface[]> => {
    return products
  }

  findId = async (id: string): Promise<boolean> => {
    const product = products.find((product) => product.id === Number(id))
    return product !== undefined
  }
}