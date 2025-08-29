import Movie from '../../../../model/Movie/Movie'

export default interface RapidRepositoryPort {
  findByTitle: (title: string) => Promise<Movie[]>
}
