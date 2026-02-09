import type { Application } from 'express'
import express from 'express'
import MovieView from '../movies/views/MovieView'
import MovieController from '../movies/controllers/MovieController'

export default class Server {
  private readonly app: Application
  private readonly movieView: MovieView

  constructor() {
    this.app = express()
    this.movieView = new MovieView(new MovieController())
    this.routes()
  }

  private routes(): void {
    this.app.use('/', this.movieView.router)
  }

  readonly start = (): void => {
    this.app.listen(1802, () => {
      console.log('Server: http://localhost:1802')
    })
  }
}
