import MovieModel from '../models/MovieModel'

export default class MovieModelFactory {
  static create(): MovieModel {
    const movieModel = new MovieModel()
    if (!movieModel) {
      throw new Error('Failed to create MovieModel')
    }
    return movieModel
  }
}
