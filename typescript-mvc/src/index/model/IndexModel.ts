import MovieInterface from '../types/MovieInterface.js'

export default class IndexModel {
  constructor () {
    console.log('IndexModel constructor')
  }

  getData = async (): Promise<MovieInterface[]> => {

  }
}
