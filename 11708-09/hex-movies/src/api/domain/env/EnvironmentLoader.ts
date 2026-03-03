export default interface EnvironmentLoader {
  readonly host: () => string
  readonly port: () => number
}
