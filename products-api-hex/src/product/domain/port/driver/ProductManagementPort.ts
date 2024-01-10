import ProductModel from '../../model/ProductModel'

export default interface ProductManagementPort {
  getProduct: (id: string) => Promise<ProductModel>
  getProducts: () => Promise<ProductModel[]>
  getProductsByPrice: (min: number, max: number) => Promise<ProductModel[]>
}
