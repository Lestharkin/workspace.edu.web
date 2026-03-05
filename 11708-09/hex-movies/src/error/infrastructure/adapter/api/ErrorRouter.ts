import { Request, Response } from 'express'
import ApiRouter from '../../../../api/domain/model/ApiRouter'

export default class ErrorRouter extends ApiRouter {
  constructor() {
    super()
    this.routes()
  }

  override readonly routes: () => void = () => {
    this.router.get('/{*any}', (_req: Request, res: Response) => {
      res.status(404).json({ error: 'Not Found' })
    })
  }
}
