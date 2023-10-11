import ProductModelParams from '../types/ProductModelParams'

export default class ProductModel {
  private id: number
  private title: string
  private amount: string
  private price: number
  private description: string
  private favorite: boolean
  private discount: boolean
  private discountPer: number
  private discountUni: string
  private image: string

  constructor (params: ProductModelParams) {
    this.id = params.id
    this.title = params.title
    this.amount = params.amount
    this.price = params.price
    this.description = params.description
    this.favorite = params.favorite
    this.discount = params.discount.discountCh
    this.discountPer = params.discount.discountPer
    this.discountUni = params.discount.discountUni
    this.image = params.image
  }

  getId (): number {
    return this.id
  }

  getTitle (): string {
    return this.title
  }

  getAmount (): string {
    return this.amount
  }

  getPrice (): number {
    return this.price
  }

  getDescription (): string {
    return this.description
  }

  getFavorite (): boolean {
    return this.favorite
  }

  getDiscount (): boolean {
    return this.discount
  }

  getDiscountPer (): number {
    return this.discountPer
  }

  getDiscountUni (): string {
    return this.discountUni
  }

  getImage (): string {
    return this.image
  }

  getDiscountPrice (): number {
    return this.price - (this.price * (this.discountPer / 100))
  }

  getDiscountPriceFormatted (): string {
    return this.getDiscountPrice().toFixed(2)
  }

  getPriceFormatted (): string {
    return this.price.toFixed(2)
  }

  getDiscountPerFormatted (): string {
    return this.discountPer.toFixed(0)
  }

  getDiscountUniFormatted (): string {
    return this.discountUni
  }

  setId (id: number): void {
    this.id = id
  }

  setTitle (title: string): void {
    this.title = title
  }

  setAmount (amount: string): void {
    this.amount = amount
  }

  setPrice (price: number): void {
    this.price = price
  }

  setDescription (description: string): void {
    this.description = description
  }

  setFavorite (favorite: boolean): void {
    this.favorite = favorite
  }

  setDiscount (discount: boolean): void {
    this.discount = discount
  }

  setDiscountPer (discountPer: number): void {
    this.discountPer = discountPer
  }

  setDiscountUni (discountUni: string): void {
    this.discountUni = discountUni
  }

  setImage (image: string): void {
    this.image = image
  }
}
