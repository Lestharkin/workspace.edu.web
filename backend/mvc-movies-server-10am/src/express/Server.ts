import cors from 'cors'
import express, { Application } from 'express'
import MoviesView from '../movies/view/MoviesView'

export default class Server {
  private readonly app: Application
  

  constructor(
    private readonly moviesView: MoviesView
  ) {
    this.app = express()     
    this.config()
  }

  public config = (): void => {
    this.app.use(cors())
    this.routes()
  }

  public routes = (): void => {
    this.app.use('/', cors(), this.moviesView.router)
  }

  public start = (): void => {
    const PORT = process.env['PORT'] ?? 3000
    const HOST = process.env['HOST'] ?? 'localhost'
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`)
    })
  }
}
