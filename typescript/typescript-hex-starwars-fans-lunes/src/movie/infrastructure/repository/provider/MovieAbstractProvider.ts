export default abstract class MovieAbstractProvider {
  protected splitNames = (starwarsNames: string): {name: string, lastname: string} => {
    const names = starwarsNames.split(" ")
    return {
      name: names[0],
      lastname: names[1]
    }
  }
}