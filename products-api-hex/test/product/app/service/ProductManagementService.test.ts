
import ProductManagementService from '../../../../src/product/app/service/ProductServiceUseCase'
import ProductModel from '../../../../src/product/domain/model/ProductModel'
import ProductNullModel from '../../../../src/product/domain/model/ProductNullModel'
import ProductRepositoryPort from '../../../../src/product/domain/port/driven/ProductRepositoryPort'
import { Mock, mock } from 'ts-jest-mocker'

describe('ProductManagementService', () => {
  let productManagementService: ProductManagementService
  let productRepository: Mock<ProductRepositoryPort<ProductModel>>

  beforeEach(() => {
    productRepository = mock<ProductRepositoryPort<ProductModel>>()
    productManagementService = new ProductManagementService(productRepository)
  })

  const product = new ProductModel({
    id: 1,
    title: 'Aceite esencial de Clavo',
    amount: '12ML.',
    price: 7.99,
    description: 'El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidad.',
    favorite: true,
    discount: {
      discountCh: true,
      discountPer: -50,
      discountUni: '2und.'
    },
    image: 'https://prodcut-api/image/1.jpg'
  })

  let products: ProductModel[] = [new ProductModel({
    id: 1,
    title: 'Aceite esencial de Clavo',
    amount: '12ML.',
    price: 7.99,
    description: 'El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidad.',
    favorite: true,
    discount: {
      discountCh: true,
      discountPer: -50,
      discountUni: '2und.'
    },
    image: 'https://prodcut-api/image/1.jpg'
  }),
  new ProductModel({
    id: 2,
    title: 'Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos',
    amount: '60UDS.',
    price: 15.50,
    description: 'Sale a: 0,26 €/ud.\nParches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad. Estos parches con oro de 24kt son la opción perfecta para rejuvenecer la mirada en pocos minutos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, contienen dos activos únicos para combatir los signos de envejecimiento: el complejo de polipéptidos SYN-COLL® y oro de 24kt. Gracias a ellos, estimulan la síntesis de colágeno en las células de la piel y ayudan a suavizar las arrugas.',
    favorite: true,
    discount: {
      discountCh: true,
      discountPer: -30,
      discountUni: '3und.'
    },
    image: 'https://prodcut-api/image/2.jpg'
  })]

  describe('findById', () => {
    it('should return product if found by id = 1', async () => {
      productRepository.findById.mockResolvedValueOnce(product)
      const result = await productManagementService.findById(1)
      expect(result).toEqual(product)
    })

    it('should return a null product object if not found', async () => {
      const productNull = ProductNullModel
      productRepository.findById.mockResolvedValueOnce(product)
      const result = await productManagementService.findById(2)
      expect(result).toEqual(productNull)
    })

    it('should return a null product object if not found', async () => {
      const productNull = ProductNullModel
      productRepository.findById.mockResolvedValueOnce(ProductNullModel)
      const result = await productManagementService.findById(1)
      expect(result).toEqual(productNull)
    })
  })

  describe('findAll', () => {
    it('should return all product if found', async () => {
      productRepository.findAll.mockResolvedValueOnce(products)
      const result = await productManagementService.findAll()
      expect(result).toEqual(products)
    })

    products = []

    it('should return a empty array if not found', async () => {
      productRepository.findAll.mockResolvedValueOnce(products)
      const result = await productManagementService.findAll()
      expect(result).toEqual(products)
    })
  })

  describe('findProductsByPrice', () => {
    it('should return a list of products if found by price range', async () => {
      productRepository.findProductsByPrice.mockResolvedValueOnce(products)
      const result = await productManagementService.findProductsByPrice(6, 15)
      expect(result).toEqual(products)
    })
  })
})
