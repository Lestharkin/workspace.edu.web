import type { Application } from 'express'
import express from 'express'

export default class Server {
  private readonly app: Application

  constructor() {
    this.app = express()
  }

  readonly start = () => {
    this.app.listen(1802, () => {
      console.log('Server is running on port 1802')
    })
  }
}
