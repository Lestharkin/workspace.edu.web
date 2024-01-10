import ProductModel from './ProductModel'

const ProductNullModel = new ProductModel({
  id: 0,
  title: '',
  amount: '',
  price: 0,
  description: '',
  favorite: false,
  discount: {
    discountCh: false,
    discountPer: 0,
    discountUni: ''
  },
  image: ''
})

export default ProductNullModel
