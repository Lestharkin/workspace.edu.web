import { Request, Response } from 'express'
import ContactModel from '../model/ContactModel'

export default class ContactController {
  constructor(private readonly contactModel: ContactModel) {}

  public register = (req: Request, res: Response): void => {
    const { name, email, message } = req.body
    // TODO: validate name, email, message
    this.contactModel.registerMessage(name, email, message)
    res.status(200).json({ message: 'Contact registered' })
  }
}
