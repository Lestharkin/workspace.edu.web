import cors from 'cors'
import express, { Application } from 'express'
import MoviesController from '../movies/controller/MoviesController'
import MoviesModel from '../movies/model/MoviesModel'
import MoviesView from '../movies/view/MoviesView'

export default class Server {
  private readonly app: Application
  private readonly moviesView: MoviesView

  constructor() {
    this.app = express()    
    const model = new MoviesModel()
    const controller = new MoviesController(model)
    this.moviesView = new MoviesView(controller)    
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
