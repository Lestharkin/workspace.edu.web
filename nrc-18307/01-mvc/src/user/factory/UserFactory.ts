import UserController from '../controller/UserController'
import UserModel from '../model/UserModel'
import UserView from '../view/UserView'

export default class UserFactory {
  public static createUserView(): UserView {
    const userModel = new UserModel()
    const userController = new UserController(userModel)
    return new UserView(userController)
  }
}
