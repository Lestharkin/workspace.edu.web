import express, { Application } from 'express'
import PapersView from '../view/PapersView'
import ErrorView from '../view/ErrorView'

export default class PapersExpress {
  private readonly app: Application

  constructor (
    private readonly papersView: PapersView,
    private readonly errorView: ErrorView
  ) {
    this.app = express()
    this.config()
    this.routes()
  }

  config = (): void => {
    this.app.use(express.json())
  }

  routes = (): void => {
    this.app.use('/', this.papersView.router)
    this.app.use('*', this.errorView.router)
  }

  start = (): void => {
    const PORT = process.env['PORT'] ?? 1802
    const HOST = process.env['HOST'] ?? 'localhost'
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`)
    })
  }
}
