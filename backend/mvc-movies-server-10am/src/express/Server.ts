import express, { Application } from 'express'
import MoviesView from '../view/MoviesView'
import MoviesController from '../controller/MoviesController'
import MoviesModel from '../model/MoviesModel'
import cors from 'cors'

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
