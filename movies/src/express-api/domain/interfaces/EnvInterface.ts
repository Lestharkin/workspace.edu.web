export default interface EnvInterface {
  PORT: () => number
  HOST: () => string
  NODE_ENV: () => string
}
