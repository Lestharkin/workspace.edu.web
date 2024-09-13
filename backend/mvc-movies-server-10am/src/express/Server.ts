import express, { Application } from 'express'

export default class Server {
  private readonly app: Application

  constructor() {
    this.app = express()
    this.config()
  }

  public config = (): void => {
    console.log('Configuring server...')
  }

  public routes = (): void => {
    console.log('Configuring routes...')
  }

  public start = (): void => {
    const PORT = process.env['PORT'] ?? 3000
    const HOST = process.env['HOST'] ?? 'localhost'
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`)
    })
  }
}
