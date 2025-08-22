import env_jon from '../../../../../../env/.env.json'
import EnvInterface from '../../../../domain/interfaces/EnvInterface'

export default class ServerProvider {
  private readonly env: EnvInterface

  constructor() {
    this.env = env_jon as unknown as EnvInterface
    if (!this.env) {
      console.error('Invalid environment configuration')
      this.env = {
        PORT: () => 3000,
        HOST: () => 'localhost',
        NODE_ENV: () => 'failure',
      }
    }
  }

  public PORT = (): number => {
    return this.env.PORT()
  }

  public HOST = (): string => {
    return this.env.HOST()
  }

  public NODE_ENV = (): string => {
    return this.env.NODE_ENV()
  }
}
