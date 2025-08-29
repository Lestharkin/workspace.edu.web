import Movie from '../../../../model/Movie/Movie'

export default interface SwapiRepositoryPort {
  findByTitle: (title: string) => Promise<Movie[]>
}
