import express, { Application } from 'express'
import MovieView from '../movie/view/MovieView'

export default class Server {
  private readonly app: Application

  constructor(private readonly movieView: MovieView) {
    this.app = express()
    this.routes()
  }

  public routes() {
    this.app.use('/', this.movieView.router)
  }

  public start() {
    const HOST = process.env['HOST'] ?? 'localhost'
    const PORT = process.env['PORT'] ?? '3000'
    const PROTOCOL = process.env['PROTOCOL'] ?? 'http'
    this.app.listen(PORT, () =>
      console.log(`Server is running on ${PROTOCOL}://${HOST}:${PORT}`)
    )
  }
}
