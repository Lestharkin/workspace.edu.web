import EnvironmentLoader from '../../domain/env/EnvironmentLoader'
import EnvVariables from '../../domain/env/EnvVariables'
import env_json from '../../../../env/env.json'

export default class EnvironmentProvider implements EnvironmentLoader {
  private static instance: EnvironmentProvider
  private readonly env: EnvVariables

  private constructor() {
    const env = env_json as EnvVariables
    if (!env) {
      this.env = {
        HOST: 'localhost',
        PORT: 3000,
      }
    }
    this.env = env
  }

  static getInstance(): EnvironmentProvider {
    if (!EnvironmentProvider.instance) {
      EnvironmentProvider.instance = new EnvironmentProvider()
    }
    return EnvironmentProvider.instance
  }

  readonly host = (): string => {
    return this.env.HOST
  }

  readonly port = (): number => {
    return this.env.PORT
  }
}
