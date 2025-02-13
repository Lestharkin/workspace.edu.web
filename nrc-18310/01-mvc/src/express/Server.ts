import express, { Application } from 'express'
import MovieView from '../movie/view/MovieView'
import EnvironmentProvider from '../provider/EnvironmentProvider'

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
    const PORT = EnvironmentProvider.getPort()
    const BASE_URL = EnvironmentProvider.getBaseUrl()
    this.app.listen(PORT, () => console.log(`Server is running on ${BASE_URL}`))
  }
}
