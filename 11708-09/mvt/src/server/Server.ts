import type { Application } from 'express'
import express from 'express'
import ApiRouter from './model/ApiRouter'
import path from 'node:path'

export default class Server {
  private readonly app: Application

  constructor(private readonly routers: ApiRouter[]) {
    this.app = express()
    this.routes()
    this.configure()
  }

  private configure(): void {
    this.app.set('view engine', 'ejs')

    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static(path.join(__dirname, '../public')))
  }

  private routes(): void {
    this.routers.forEach((router) => {
      this.app.use('/', router.router)
    })
  }

  readonly start = (): void => {
    const PORT = process.env['PORT'] || 3000
    const HOST = process.env['HOST'] || 'localhost'
    this.app.listen(PORT, () => {
      console.log(`Server: http://${HOST}:${PORT}`)
    })
  }
}
