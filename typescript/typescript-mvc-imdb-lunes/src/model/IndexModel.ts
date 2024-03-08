import MovieInterface from '../types/MovieInterface'

export default class IndexModel {
  constructor () {
    console.log('IndexModel')
  }

  public async getMovies (): Promise<MovieInterface[]> {
    return await new Promise((resolve, reject) => {
      const response = fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1c95ebb708mshc05c266b057330cp1df76djsnba5426df4bdb',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      })

      response.then((data) => {
        resolve(data.json())
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
