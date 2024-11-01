export default class SWAPIDBC {
  private readonly filmsAPI = 'https://swapi.dev/api/films/'

  public findALL = async () => {
    const response = await fetch(this.filmsAPI)
    const data = await response.json()
    data.characters = await this.getCharacters(
      data.results.map((character: any) => character.name)
    )
    return data.results
  }

  public getCharacters(endpoints: string[]) {
    return Promise.all(
      endpoints.map(async (endpoint) => {
        const response = await fetch(endpoint)
        return response.json
      })
    )
  }
}
