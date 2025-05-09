import env_json from '../../../env/env.json'
import { EnvInterface } from '../types/EnvInterface'

export default class ExpressProvider {
  public env: EnvInterface

  constructor() {
    this.env = env_json as EnvInterface
  }

  public host() {
    return this.env.HOST
  }

  public port() {
    return this.env.PORT
  }

  public protocol() {
    return this.env.PROTOCOL
  }
}
