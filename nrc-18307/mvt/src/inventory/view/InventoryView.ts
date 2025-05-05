import { Request, Response } from 'express'

export default class InventoryView {
  public index(_req: Request, res: Response) {
    res.send('Inventory index')
  }

  public next(_req: Request, res: Response) {
    res.send('Inventory next')
  }

  public prev(_req: Request, res: Response) {
    res.send('Inventory prev')
  }
}
