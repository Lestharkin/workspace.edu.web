import RetrieveMovies from "../../../../src/movie/infrastructure/repository/RetrieveMovies"
import { Mock, mock } from 'ts-jest-mocker'
import StarwarsAPI from "../../../../src/movie/util/StarwarsAPI"
import StarwarsCharacter from "../../../../src/movie/domain/starwars/StarwarsCharacter"
import StarwarsMovie from "../../../../src/movie/domain/starwars/StarwarsMovie"
import Movie from "../../../../src/movie/domain/model/movie/Movie"
import Producer from "../../../../src/movie/domain/model/producer/Producer"
import Director from "../../../../src/movie/domain/model/director/Director"
import Character from "../../../../src/movie/domain/model/character/Character"

describe('RetrieveMovies', () => {

  let retrieveMovies: RetrieveMovies
  let starwarsAPI: Mock<StarwarsAPI>
  
  // in
  let mockCharacters: StarwarsCharacter[]
  let mockMovieData: StarwarsMovie[]

  // out
  let movie: Movie

  beforeEach(() => {
    starwarsAPI = mock<StarwarsAPI>()
    retrieveMovies = new RetrieveMovies(starwarsAPI)

    mockCharacters = [
      { name: 'Luke Skywalker', gender: 'male' },
      { name: 'Leia Organa', gender: 'female' },
    ]

    mockMovieData = [
      {
        title: 'A New Hope',
        episode_id: 4,
        opening_crawl: 'It is a period of civil war...',
        release_date: '1977-05-25',
        producer: 'Gary Kurtz, Rick McCallum',
        director: 'George Lucas',
        characters: ['Luke Skywalker', 'Leia Organa'],
      }
    ]

    movie = new Movie(
      'A New Hope',
      4,
      'It is a period of civil war...',
      new Date('1977-05-25'),
      [new Producer('Gary', 'Kurtz'), new Producer('Rick', 'McCallum')],
      new Director('George', 'Lucas'),
      [
        new Character('Luke', 'Skywalker', 'male'),
        new Character('Leia', 'Organa', 'female'),
      ]
    )

  })

  describe('findAll', () => {

  })

})