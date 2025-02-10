import { Request, Response } from 'express'
import UserModel from '../model/UserModel'

export default class UserController {
  constructor(private readonly userModel: UserModel) {}

  public login(req: Request, res: Response): void {
    console.log(req.body)

    const { username, password } = req.body

    if (username === undefined || password === undefined) {
      res.status(400).send('Bad request')
      return
    }

    const user = this.userModel.validateUser(username, password)

    res.status(200).json({ user })
  }
}
