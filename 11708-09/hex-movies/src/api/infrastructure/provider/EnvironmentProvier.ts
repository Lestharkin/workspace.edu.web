import EVariable from '../../domain/config/EVariable'
import env_json from '../../../../env/env.json'
import EnvironmentProviderInterface from '../../domain/config/EnvironmentProviderInterface'

export default class EnvironmentProvider implements EnvironmentProviderInterface {
  private static instance: EnvironmentProvider
  private readonly env: EVariable

  private constructor() {
    const envJson = env_json as EVariable
    if (!envJson) {
      this.env = {
        PORT: 3000,
        HOST: 'localhost',
      } as EVariable
    }
    this.env = envJson
  }

  readonly getPort = (): number => {
    return this.env.PORT
  }

  readonly getHost = (): string => {
    return this.env.HOST
  }

  static getInstance(): EnvironmentProvider {
    if (!EnvironmentProvider.instance) {
      EnvironmentProvider.instance = new EnvironmentProvider()
    }
    return EnvironmentProvider.instance
  }
}
