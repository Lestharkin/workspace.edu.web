import ErrorController from './controller/ErrorController'
import ErrorView from './view/ErrorView'

export default class Error404 {
  public static readonly create = (): ErrorController => {
    const view = new ErrorView()
    return new ErrorController(view)
  }
}
