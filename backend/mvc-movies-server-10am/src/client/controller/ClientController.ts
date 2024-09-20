import { Request, Response } from 'express'
import path from 'path'

export default class ClientController {
  public index = (_req: Request, res: Response): void => {
    res.status(200).sendFile(
      path.resolve(__dirname, '../public/index.html')
    )
  }
}