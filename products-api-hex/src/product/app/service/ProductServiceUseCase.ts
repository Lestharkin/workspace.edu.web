import ProductModel from '../../domain/model/ProductModel'
import ProductNullModel from '../../domain/model/ProductNullModel'
import ProductRepositoryPort from '../../domain/port/driven/ProductRepositoryPort'

export default class ProductManagementService {
  constructor (private readonly productRepository: ProductRepositoryPort<ProductModel>) {}

  findById = async (id: number): Promise<ProductModel> => {
    const product = await this.productRepository.findById(String(id))
    // TODO VALIDATE IF PRODUCT IS NULL
    if (product !== undefined) return product
    return ProductNullModel
  }

  findAll = async (): Promise<ProductModel[]> => {
    return await this.productRepository.findAll()
  }

  findProductsByPrice = async (min: number, max: number): Promise<ProductModel[]> => {
    return await this.productRepository.findProductsByPrice(String(min), String(max))
  }
}
