import ProductModel from '../../../domain/model/ProductModel'
import ProductRepositoryPort from '../../../domain/port/driven/ProductRepositoryPort'
import products from './database/products.json'

export default class ProductRepositoryJsonAdapter implements ProductRepositoryPort<ProductModel> {
  findById = async (id: string): Promise<ProductModel | undefined> => {
    return await new Promise((resolve, reject) => {
      try {
        const product = products.find((product) => product.id === Number(id))
        if (product !== undefined) {
          resolve(new ProductModel({
            id: product.id,
            title: product.title,
            amount: product.amount,
            price: product.price,
            description: product.description,
            favorite: product.favorite,
            discount: {
              discountCh: product.discount,
              discountPer: product.discountPer,
              discountUni: product.discountUni
            },
            image: `${product.id}.jpg`
          }))
        } else {
          reject(new Error('Product not found'))
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  findAll = async (): Promise<ProductModel[] | []> => {
    return []
  }

  findProductsByPrice = async (min: string, max: string): Promise<ProductModel[] | []> => {
    return []
  }
}
