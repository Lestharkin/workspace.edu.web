import Genre from '../../domain/enum/Genre'
import Movie from '../../domain/model/movie/Movie'
import NullMovie from '../../domain/model/movie/NullMovie'

export default class TestMock {
  readonly test = (): Movie[] => {
    let movie = Movie.Builder().build()

    const movie2 = Movie.Builder()
      .setTitle('test')
      .setGenre(Genre.ACTION)
      .setSynopsis('dfadfasdf asdf asdf asd fasd fas df asdf asdf asdf ')
      .build()

    if (!movie) {
      movie = new NullMovie()
    }

    return [movie, movie2]
  }
}
