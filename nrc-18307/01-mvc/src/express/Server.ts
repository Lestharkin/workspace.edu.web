import express, { Application } from 'express'
import MovieView from '../movie/view/MovieView'
import Environment from '../shared/Environment'

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
    const HOST = Environment.getHost()
    const PORT = Environment.getPort()
    const PROTOCOL = Environment.getProtocol()
    this.app.listen(PORT, () =>
      console.log(`Server is running on ${PROTOCOL}://${HOST}:${PORT}`)
    )
  }
}
