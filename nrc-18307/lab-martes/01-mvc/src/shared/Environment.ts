export default class Environment {
  private static instance: Environment
  private static HOST: string
  private static PORT: string
  private static PROTOCOL: string

  private constructor() {
    Environment.HOST = process.env['HOST'] ?? 'localhost'
    Environment.PORT = process.env['PORT'] ?? '3000'
    Environment.PROTOCOL = process.env['PROTOCOL'] ?? 'http'    
  }

  public static getInstance(): Environment {
    if (Environment.instance === null || Environment.instance === undefined) {
      Environment.instance = new Environment()
    }
    return Environment.instance
  }

  public static getHost(): string {
    Environment.getInstance()
    return Environment.HOST
  }

  public static getPort(): string {
    Environment.getInstance()
    return Environment.PORT
  }

  public static getProtocol(): string {
    Environment.getInstance()
    return Environment.PROTOCOL
  }

  public static getAPIDomain(): string {
    Environment.getInstance()
    return `${Environment.PROTOCOL}://${Environment.HOST}:${Environment.PORT}`
  }
}
