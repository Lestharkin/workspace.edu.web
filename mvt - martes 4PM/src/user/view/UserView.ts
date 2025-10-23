import { Request, Response } from 'express'
import User from '../types/User'

export default class UserView {
  readonly formRegister = (_req: Request, res: Response) => {
    res.status(200).render('register')
  }
  readonly register = (req: Request, res: Response) => {
    const user = req.body as User
    res.status(200).render('user', { user })
  }
}
