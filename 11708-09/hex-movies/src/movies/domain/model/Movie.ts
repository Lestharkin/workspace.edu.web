import Classification from './Classification'
import Genre from './Genre'

export default class Movie {
  private readonly id: string
  private readonly title: string
  private readonly synopsis: string
  private readonly release: Date
  private readonly classification: Classification
  private readonly genre: Genre
}
