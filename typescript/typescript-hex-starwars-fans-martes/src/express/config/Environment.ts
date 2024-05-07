export default class Environment {
  HOST: string
  PORT: number

  constructor() {
    this.HOST = process.env['HOST'] ?? 'localhost'
    this.PORT = parseInt(process.env['PORT'] ?? '1802')
  }
}
