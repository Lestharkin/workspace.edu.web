import supertest from 'supertest'
import Express from '../src/express/Express'
import MovieFactory from '../src/movie/infrastructure/factory/MovieFactory'

describe('swf-app', () => {
  let swfApp: Express

  beforeAll(() => {
    const movieFactory = new MovieFactory()
    const movieRouter = movieFactory.createRouter()
    swfApp = new Express([movieRouter])
  })

  describe('GET /v1.0/movie/movies', () => {
    it('should return 200 OK with movies', async () => {
      const response = await supertest(swfApp.getApp())
        .get('/v1.0/movie/movies')
      console.log(response.body.movies)
      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveProperty('movies')
    })
  })
})
