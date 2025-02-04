import express, { Application } from 'express'
import MovieView from '../movies/view/MovieView'

export default class Server {
  private readonly app: Application  

  constructor(private readonly movieView: MovieView) {
    this.app = express()
    this.routes()
  }

  public routes(): void {
    // https://localhost:1802/api/v1.0/movies/movies
    this.app.use('/', this.movieView.router)
  }

  public start(): void {
    const PORT = process.env['PORT'] ?? 1802
    const HOST = process.env['HOST'] ?? 'localhost'
    const PROTOCOL = process.env['PROTOCOL'] ?? 'http'
    this.app.listen(PORT, () => {
      console.log(`Server is running on ${PROTOCOL}://${HOST}:${PORT}`)
    })
  }
}
