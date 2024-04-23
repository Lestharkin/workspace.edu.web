import StarwarsMovie from "../../../src/movie/domain/starwars/StarwarsMovie"
import StarwarsAPI from "../../../src/movie/util/StarwarsAPI"

const starwarsAPI = new StarwarsAPI()
let iv: StarwarsMovie

beforeAll(() => {
  iv = {
    "title": "A New Hope",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    "release_date": "1977-05-25",
    "director": "George Lucas",
    "producer": "Gary Kurtz, Rick McCallum",
    "characters": [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/2/",
      "https://swapi.dev/api/people/3/",
      "https://swapi.dev/api/people/4/",
      "https://swapi.dev/api/people/5/",
      "https://swapi.dev/api/people/6/",
      "https://swapi.dev/api/people/7/",
      "https://swapi.dev/api/people/8/",
      "https://swapi.dev/api/people/9/",
      "https://swapi.dev/api/people/10/",
      "https://swapi.dev/api/people/12/",
      "https://swapi.dev/api/people/13/",
      "https://swapi.dev/api/people/14/",
      "https://swapi.dev/api/people/15/",
      "https://swapi.dev/api/people/16/",
      "https://swapi.dev/api/people/18/",
      "https://swapi.dev/api/people/19/",
      "https://swapi.dev/api/people/81/"
    ]
  }
})

describe('StarwarsAPI', () => {
  
  describe('fetchAllMovies', () => {
    it('aquí pongo lo que debería hacer esto', async () => {
      const response = await starwarsAPI.fetchAllMovies()
      expect(response).toBeDefined()
      expect(response.length).toBeGreaterThan(0)
      expect(response[0].title).toEqual(iv.title)
    })
  })
})