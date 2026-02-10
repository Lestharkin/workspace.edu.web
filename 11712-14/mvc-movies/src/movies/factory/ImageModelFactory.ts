import ImageModel from '../models/ImageModel'

export default class ImageModelFactory {
  static create(): ImageModel {
    const imageModel = new ImageModel()
    if (!imageModel) {
      throw new Error('Failed to create ImageModel')
    }
    return imageModel
  }
}
