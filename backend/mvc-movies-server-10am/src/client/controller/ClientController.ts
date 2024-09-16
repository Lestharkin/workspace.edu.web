import { Request, Response } from 'express'

export default class ClientController {
  public index = (_req: Request, res: Response): void => {
    res.status(200).sendFile('index.html')
  }
}