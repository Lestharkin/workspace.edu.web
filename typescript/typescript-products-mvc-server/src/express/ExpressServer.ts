import express, { Application } from 'express'

export default class ExpressServer {
  private readonly app: Application

  constructor () {
    this.app = express()
  }

  start () {
    const PORT = process.env['PORT'] ?? 1802
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  }
}
