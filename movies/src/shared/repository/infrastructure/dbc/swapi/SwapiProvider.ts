import env_json from '../../../../../../env/.dbc.json'
import EnvSwapiInterface from '../../../domain/interfaces/EnvSwapiInterface'

export default class SwapiProvider {
  private readonly env: EnvSwapiInterface

  constructor() {
    this.env = env_json as EnvSwapiInterface

    if (!this.env) {
      throw new Error('Invalid SWAPI configuration')
    }
  }

  readonly URL = () => this.env.SWAPI.URL
}
