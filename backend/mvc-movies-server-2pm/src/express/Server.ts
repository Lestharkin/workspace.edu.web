import express, { Application } from 'express'

export default class Server {
  private app: Application

  constructor() {
    this.app = express()
  }

  public start =  () => {
    const PORT = process.env['PORT'] ?? 1802
    const HOST = process.env['HOST'] ?? 'localhost'
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`)
    })
  }
}
