import { Request, Response } from 'express'
import UserModel from '../model/UserModel'

export default class UserController {
  constructor(private userModel: UserModel) {}

  public login(req: Request, res: Response) {
    const { username, password } = req.body

    if (username === undefined || password === undefined) {
      return res.status(400).json({ error: 'Invalid username or password' })
    }

    // TODO VALIDATE USERNAME AND PASSWORD

    const user = this.userModel.validateUser(username, password)

    res.status(200).json(user)
  }
}
