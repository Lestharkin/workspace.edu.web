import cors from 'cors'
import express, { Application } from 'express'
import path from 'path'

export default class Server {
  private readonly app: Application

  constructor() {
    this.app = express()
    this.statics()
    this.config()
    this.routes()
  }

  public config = (): void => {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cors())
    this.app.set('view engine', 'ejs')
    this.app.set('views', path.join(__dirname, '../products/template'))
  }

  public statics = (): void => {
    this.app.use(express.static(path.resolve(__dirname, '../products/public')))
  }

  public routes = (): void => {
    this.app.use('/', cors(), this.clientView.router)
    this.app.use('*', cors(), this.clientView.router)
  }

  public start = (): void => {
    const PORT = process.env['PORT'] ?? 3000
    const HOST = process.env['HOST'] ?? 'localhost'
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`)
    })
  }
}
