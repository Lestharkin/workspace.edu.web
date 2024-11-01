export default class SWAPIDBC {
  private readonly filmsAPI = 'https://swapi.dev/api/films/'

  public findALL = async () => {
    const response = await fetch(this.filmsAPI)
    const data = await response.json()
    const movies = data.results

    let char: string[] = []
    movies.forEach(async (movie: any) => {
      char = await movie.characters.map(async (character: any) => {
        return await this.getCharacters(character)
      })
      movie.characters = (await Promise.all(char)).map((character: any) => character.name)
    })
    console.log(movies)
    return movies
  }

  public async getCharacters(endpoint: string) {
    const response = await fetch(endpoint)
    return await response.json()
  }
}
