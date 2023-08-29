import MovieInterface from '../types/MovieInterface.js'
import nullMovie from '../types/NullMovie.js'

export default class IndexModel {
  constructor () {
    console.log('IndexModel')
  }

  getData = async (): Promise<MovieInterface[]> => {
    const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1c95ebb708mshc05c266b057330cp1df76djsnba5426df4bdb',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    })
    const movies = response.json()
    return await new Promise((resolve, reject) => {
      try {
        resolve(movies)
      } catch (error) {
        console.warn(error)
        reject(nullMovie)
      }
    })
  }
}
