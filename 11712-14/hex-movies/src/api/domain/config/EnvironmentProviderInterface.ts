export default interface EnvironmentProviderInterface {
  getPort: () => number
  getHost: () => string
}
