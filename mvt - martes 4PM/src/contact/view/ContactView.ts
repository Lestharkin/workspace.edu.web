import { Request, Response } from 'express'

export default class ContactView {
  readonly contact = (_req: Request, res: Response) => {
    res.status(404).render('contact')
  }

  readonly register = (req: Request, res: Response) => {
    const { name, email, message } = req.body
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)
    res.status(200).render('contact', { success: true })
  }
}
