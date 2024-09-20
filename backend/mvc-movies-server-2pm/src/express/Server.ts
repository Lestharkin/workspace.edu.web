import express, { Application } from 'express'
import cors from 'cors'
import MoviesView from '../movies/view/MoviesView'
import ClientView from '../client/view/ClientView'
import path from 'path'

export default class Server {
  private readonly app: Application  

  constructor(
    private readonly moviesView: MoviesView,
    private readonly clientView: ClientView
  ) {
    this.app = express()
    this.statics()
    this.config()
    this.routes()
  }

  public config = (): void => {
    this.app.use(cors())
  }

  public statics = (): void => {
    this.app.use(
      express.static(path.resolve(__dirname, '../client/public'))
    )
  }

  public routes = (): void => {
    this.app.use('/', cors(), this.clientView.router)
    this.app.use('/api/', cors(), this.moviesView.router)
    this.app.use('*', cors(), this.moviesView.router)
  }

  public start = (): void => {
    const PORT = process.env['PORT'] ?? 3000
    const HOST = process.env['HOST'] ?? 'localhost'
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`)
    })
  }
}
