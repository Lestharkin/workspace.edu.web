import express, { Application } from 'express'
import MovieView from '../movie/view/MovieView'
import EnvironmentProvider from '../provider/EnvironmentProvider'
import UserView from '../user/view/UserView'

export default class Server {
  private readonly app: Application

  constructor(private readonly movieView: MovieView,
    private readonly userView: UserView
  ) {
    this.app = express()
    this.configure()
    this.routes()
  }

  public configure() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  public routes() {
    this.app.use('/api/v1.0/movies/', this.movieView.router)
    this.app.use('/api/v1.0/users/', this.userView.router)
  }

  public start() {
    const PORT = EnvironmentProvider.getPort()
    const BASE_URL = EnvironmentProvider.getBaseUrl()
    this.app.listen(PORT, () => console.log(`Server is running on ${BASE_URL}`))
  }
}
