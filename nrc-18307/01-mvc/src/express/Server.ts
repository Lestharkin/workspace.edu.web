import express, { Application } from 'express'
import MovieView from '../movie/view/MovieView'
import Environment from '../shared/Environment'
import UserView from '../user/view/UserView'

export default class Server {
  private readonly app: Application

  constructor(
    private readonly movieView: MovieView,
    private readonly userView: UserView
  ) {
    this.app = express()
    this.routes()
    this.configure()
  }

  public routes() {
    this.app.use('/api/v1.0/movies', this.movieView.router)
    this.app.use('/api/v1.0/users', this.userView.router)
  }

  public configure() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
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
