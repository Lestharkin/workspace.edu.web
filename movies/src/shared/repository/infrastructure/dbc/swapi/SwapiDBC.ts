import SwapiProvider from './SwapiProvider'

export default class SwapiDBC {
  private static instance: SwapiDBC
  private readonly provider: SwapiProvider

  private constructor() {
    this.provider = new SwapiProvider()
  }

  static readonly getInstance = (): SwapiDBC => {
    SwapiDBC.instance = this.instance ?? new SwapiDBC()
    return SwapiDBC.instance
  }

  readonly get = async (endpoint: string) => {
    const response = await fetch(endpoint)
    return await response.json()
  }

  readonly queryByPath = async (queryString: string) => {
    const url = `${this.provider.URL()}${queryString}`
    const response = await fetch(url)
    return await response.json()
  }

  readonly films = async () => {
    return await this.queryByPath('/films')
  }
}
