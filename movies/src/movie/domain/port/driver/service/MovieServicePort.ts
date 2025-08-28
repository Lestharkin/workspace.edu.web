import Movie from '../../../model/Movie/Movie'

export default interface MovieServicePort {
  findByTitle(title: string): Promise<Movie[]>
}
