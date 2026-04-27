import { Request, Response } from 'express'
import path from 'node:path'
import ApiRouter from '../../api/model/ApiRouter'

export default class JobsRouter extends ApiRouter {
  constructor() {
    super()
    this.routes()
  }

  override readonly routes = () => {
    this.router.get('/', (_req: Request, res: Response) => {
      res.render(path.join(__dirname, '../template/index'))
    })
  }
}
