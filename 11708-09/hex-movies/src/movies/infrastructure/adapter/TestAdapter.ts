import Movie from '../../domain/model/movie/Movie'
import NullMovie from '../../domain/model/movie/NullMovie'

export default class TestAdapter {
  readonly getTest = (): Movie => {
    const movie = Movie.builder()
      .setId('1')
      .setTitle('Test Movie')
      .setSynopsis('This is a test movie')
      .setRelease(new Date('2024-01-01'))
      .build()

    if (!movie) {
      return new NullMovie()
    }
    return movie
  }
}
