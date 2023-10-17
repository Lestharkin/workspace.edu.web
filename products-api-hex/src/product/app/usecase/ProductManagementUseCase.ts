import ProductModel from '../../domain/model/ProductModel'
import ProductManagementPort from '../../domain/port/driver/ProductManagementPort'

export default class ProductManagementUseCase implements ProductManagementPort {
  constructor (private readonly productManagementService: ProductManagementService) {}

  getProduct = async (id: string): Promise<ProductModel> => {
    const idNumber = Number(id)
    if (isNaN(idNumber)) return ProductNullModel
    return await this.productManagementService.findById(idNumber)
  }

  getProducts = async (): Promise<ProductModel[]> => {
    return await this.productManagementService.findAll()
  }

  getProductsByPrice = async (min: number, max: number): Promise<ProductModel[]> => {
    min = Math.floor(min)
    max = Math.floor(max)
    min = min < 0 ? 0 : min
    max = max < 0 ? 100 : max
    if (min > max) {
      return []
    }
    return await this.productManagementService.findProductsByPrice(min, max)
  }
}
