import { Request, Response } from 'express'
import PapersModel from '../model/PapersModel'

export default class PapersController {
  constructor (private readonly papersModel: PapersModel) { }

  getReferences = (_req: Request, res: Response): void => {
    const references = this.papersModel.getReferences()
    references.then((papers) => {
      res.status(200).json({ papers })
    }).catch(() => {
      res.status(500).json({ message: 'error' })
    })
  }

  getReferenceById = (req: Request, res: Response): void => {
    const { id } = req.params

    if (id === undefined) {
      res.status(400).json({ message: 'id is required' })
      return
    }

    const reference = this.papersModel.getReferenceById(id)

    reference.then((paper) => {
      res.status(200).json({ paper })
    }).catch(() => {
      res.status(500).json({ message: 'error' })
    })
  }
}
