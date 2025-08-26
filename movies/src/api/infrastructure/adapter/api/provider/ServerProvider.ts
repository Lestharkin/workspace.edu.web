import { EnvInterface } from '../../../../domain/interfaces/EnvInterface'
import env_json from '../../../../../../env/.env.json'

export default class ServerProvider {
  private readonly env: EnvInterface

  constructor() {
    this.env = env_json as EnvInterface
    if (!this.env) {
      this.env = {
        HOST: 'localhost',
        PORT: 1802,
        STATIC_DIR: './public',
        NODE_ENV: 'failure',
      }
    }
  }

  readonly HOST = (): string => this.env.HOST
  readonly PORT = (): number => this.env.PORT
  readonly STATIC_DIR = (): string => this.env.STATIC_DIR
  readonly NODE_ENV = (): string => this.env.NODE_ENV
}
