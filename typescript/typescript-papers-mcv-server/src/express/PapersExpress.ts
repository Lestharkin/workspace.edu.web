import express, { Application } from 'express'

export default class PapersExpress {
  private readonly app: Application

  constructor () {
    this.app = express()
  }

  start = (): void => {
    this.app.listen(1802, () => {
      console.log('Server is running on port 1802')
    })
  }
}
