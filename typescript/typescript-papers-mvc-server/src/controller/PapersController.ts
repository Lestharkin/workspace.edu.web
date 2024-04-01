import { Request, Response } from 'express'

export default class PapersController {
  constructor (private readonly papersModel: PapersModel) {}

  getReferences = async (_req: Request, res: Response): Promise<void> => {
    try {
      const references = await this.papersModel.getReferences()
      res.status(200).json(references)
    } catch (error) {
      res.status(500).json({ error: 'error' })
    }
  }
}
