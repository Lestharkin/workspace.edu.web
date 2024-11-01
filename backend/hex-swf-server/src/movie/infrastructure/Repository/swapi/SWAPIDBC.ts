export default class SWAPIDBC {

  private readonly filmsAPI = 'https://swapi.dev/api/films/'

  public findALL = async () => {
    const response = await fetch(this.filmsAPI)
    const data = await response.json()
    return data.results
  }

}