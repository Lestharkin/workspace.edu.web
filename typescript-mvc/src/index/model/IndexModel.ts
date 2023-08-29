import MovieInterface from '../types/MovieInterface.js'

export default class IndexModel {
  constructor () {
    console.log('IndexModel constructor')
  }

  getData = async (): Promise<MovieInterface[]> => {
    const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    })
  }
}
