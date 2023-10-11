export default interface ProductRepositoryPort<T> {
  findById: (id: string) => Promise<T> | undefined
  findAll: () => Promise<T[]> | []
  findProductsByPrice: (min: string, max: string) => Promise<T[]> | []
}
