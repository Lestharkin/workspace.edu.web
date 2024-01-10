import ProductDiscountParams from './ProductDiscountParams'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ProductModelParams = {
  id: number
  title: string
  amount: string
  price: number
  description: string
  favorite: boolean
  discount: ProductDiscountParams
  image: string
}

export default ProductModelParams
