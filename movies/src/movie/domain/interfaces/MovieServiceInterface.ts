import Movie from '../model/Movie/Movie'

export default interface MovieServiceInterface {
  findByTitle(title: string): Promise<Movie[]>
}
