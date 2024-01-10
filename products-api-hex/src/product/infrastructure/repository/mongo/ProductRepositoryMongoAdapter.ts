import ProductModel from '../../../domain/model/ProductModel'
import ProductRepositoryPort from '../../../domain/port/driven/ProductRepositoryPort'

export default class ProductRepositoryMongoAdapter implements ProductRepositoryPort<ProductModel> {
  findById = async (id: string): Promise<ProductModel | undefined> => {
    return undefined
  }

  findAll = async (): Promise<ProductModel[] | []> => {
    return []
  }

  findProductsByPrice = async (min: string, max: string): Promise<ProductModel[] | []> => {
    return []
  }
}
