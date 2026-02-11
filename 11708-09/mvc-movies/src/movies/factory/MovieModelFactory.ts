import MovieModel from '../models/MovieModel'

export default class MovieModelFactory {
  static readonly create = (): MovieModel => {
    const Model = new MovieModel()
    if (!Model) {
      throw new Error('MovieModelFactory: Failed to create MovieModel instance')
    }
    return Model
  }
}
