export default class EnvironmentProvider {
  private static instance: EnvironmentProvider
  private static HOST: string
  private static PORT: string
  private static PROTOCOL: string

  private constructor() {
    EnvironmentProvider.HOST = process.env['HOST'] ?? 'localhost'
    EnvironmentProvider.PORT = process.env['PORT'] ?? '3000'
    EnvironmentProvider.PROTOCOL = process.env['PROTOCOL'] ?? 'http'
  }

  public static getInstance(): EnvironmentProvider {
    if (EnvironmentProvider.instance === undefined || EnvironmentProvider.instance === null) {
      EnvironmentProvider.instance = new EnvironmentProvider()
    }
    return EnvironmentProvider.instance
  }

  public static getHost(): string {
    EnvironmentProvider.getInstance()
    return EnvironmentProvider.HOST
  }

  public static getPort(): string {
    EnvironmentProvider.getInstance()
    return EnvironmentProvider.PORT
  }

  public static getProtocol(): string {
    EnvironmentProvider.getInstance()
    return EnvironmentProvider.PROTOCOL
  }

  public static getBaseUrl(): string {
    EnvironmentProvider.getInstance()
    return `${EnvironmentProvider.PROTOCOL}://${EnvironmentProvider.HOST}:${EnvironmentProvider.PORT}`
  }
}