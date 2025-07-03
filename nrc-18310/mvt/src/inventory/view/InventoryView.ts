import { Request, Response } from 'express'

export default class InventoryView {
  readonly index = (_req: Request, res: Response) => {
    res.send('Inventory index')
  }

  readonly next = (_req: Request, res: Response) => {
    res.send('Next inventory item')
  }

  readonly prev = (_req: Request, res: Response) => {
    res.send('Previous inventory item')
  }
}
