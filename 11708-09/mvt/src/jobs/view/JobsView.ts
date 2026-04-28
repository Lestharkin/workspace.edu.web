import { Request, Response } from 'express'
import path from 'node:path'

export default class JobsView {
  readonly index = (_req: Request, res: Response): void => {
    res.render(path.join(__dirname, '../template/index'))
  }
}
