import EndPoint from './EndPoint'

export default class Environment {
  public static readonly getEndpointMovies = async (): Promise<string> => {
    const env = await fetch('./js/env/env.json')
    const json = await env.json()
    const endpoint = json['movies'] as EndPoint
    return `${endpoint.protocol}://${endpoint.domain}/${endpoint.path}/${endpoint.version}/${endpoint.resource}`
  }

  public static readonly getEndpointContactRegister = async (): Promise<string> => {
    const env = await fetch('./js/env/env.json')
    const json = await env.json()
    const endpoint = json['contact/register'] as EndPoint
    return `${endpoint.protocol}://${endpoint.domain}/${endpoint.path}/${endpoint.version}/${endpoint.resource}`
  }
}
