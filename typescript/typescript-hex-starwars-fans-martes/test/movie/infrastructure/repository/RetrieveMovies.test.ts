import Character from "../../../../src/movie/domain/model/character/Character"
import NullCharacter from "../../../../src/movie/domain/model/character/NullCharacter"
import Director from "../../../../src/movie/domain/model/director/Director"
import NullDirector from "../../../../src/movie/domain/model/director/NullDirector"
import Movie from "../../../../src/movie/domain/model/movie/Movie"
import Producer from "../../../../src/movie/domain/model/producer/Producer"
import StarwarsCharacter from "../../../../src/movie/domain/starwars/StarwarsCharacter"
import StarwarsMovie from "../../../../src/movie/domain/starwars/StarwarsMovie"
import RetrieveMovies from "../../../../src/movie/infrastructure/repository/RetrieveMovies"
import StarwarsAPI from "../../../../src/movie/util/StarwarsAPI"
import { Mock, mock } from 'ts-jest-mocker'

describe('RetrieveMovies', () => {

  let retrieveMovies: RetrieveMovies
  let starwarsAPI: Mock<StarwarsAPI>

  let mockCharacters: StarwarsCharacter[]
  let mockMovieData: StarwarsMovie[]

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

  afterAll(() => {
    jest.restoreAllMocks()
  })

  describe('findAll', () => {
    it('should retrieve movies instance from starwars API', async () => {
      starwarsAPI.fetchAllMovies.mockResolvedValue(mockMovieData)
      starwarsAPI.charactersFromMovies.mockResolvedValue(mockCharacters)

      const movies = await retrieveMovies.findAll()

      expect(movies).toEqual([movie])
    })

    it('should retrieve all movies with characters, producers, and director', async () => {
      starwarsAPI.fetchAllMovies.mockResolvedValue(mockMovieData)
      starwarsAPI.charactersFromMovies.mockResolvedValue(mockCharacters)

      const movies = await retrieveMovies.findAll()

      expect(movies).toHaveLength(1)
      expect(movies[0]).toBeInstanceOf(Movie)
      expect(movies[0].getTitle()).toEqual('A New Hope')
      expect(movies[0].getEpisode_id()).toEqual(4)
      expect(movies[0].getProducers()).toHaveLength(2)
      expect(movies[0].getProducers()[0]).toBeInstanceOf(Producer)
      expect(movies[0].getProducers()[1]).toBeInstanceOf(Producer)
      expect(movies[0].getDirector()).toBeInstanceOf(Director)
      expect(movies[0].getCast()).toHaveLength(2)
      expect(movies[0].getCast()[0]).toBeInstanceOf(Character)
      expect(movies[0].getCast()[1]).toBeInstanceOf(Character)
    })

    it('should handle null or empty values for name fields', async () => {
      const mockToNullCharacters = [
        { name: 'Luke Skywalker', gender: 'male' },
        { name: '', gender: 'female' },
      ]
  
      const mockToNullMovieData = [
        {
          title: 'A New Hope',
          episode_id: 4,
          opening_crawl: 'It is a period of civil war...',
          release_date: '1977-05-25',
          producer: 'Gary Kurtz, Rick McCallum',
          director: '',
          characters: ['Luke Skywalker', ''],
        }
      ]
  
      const mockToNullMovie = new Movie(
        'A New Hope',
        4,
        'It is a period of civil war...',
        new Date('1977-05-25'),
        [new Producer('Gary', 'Kurtz'), new Producer('Rick', 'McCallum')],
        new NullDirector(),
        [
          new Character('Luke', 'Skywalker', 'male'),
          new NullCharacter(),
        ]
      )

      starwarsAPI.fetchAllMovies.mockResolvedValue(mockToNullMovieData)
      starwarsAPI.charactersFromMovies.mockResolvedValue(mockToNullCharacters)

      const movies = await retrieveMovies.findAll()

      expect(movies).toEqual([mockToNullMovie])

      expect(movies).toHaveLength(1)
      expect(movies[0].getDirector()).toBeInstanceOf(NullDirector)
      expect(movies[0].getProducers()[0]).toBeInstanceOf(Producer)
      expect(movies[0].getProducers()[1]).toBeInstanceOf(Producer)
      expect(movies[0].getCast()[1]).toBeInstanceOf(NullCharacter)
    })
  })

})
