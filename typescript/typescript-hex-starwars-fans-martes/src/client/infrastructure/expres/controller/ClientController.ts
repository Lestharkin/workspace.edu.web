import { Request, Response } from 'express'
import path from 'path'

export default class ClientController {
  index = (_req: Request, res: Response) => {
    res.status(200).sendFile(path.join(__dirname, '../frontend/index.html'))
  }
}