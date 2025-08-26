import AbstractRouter from '../../../../domain/model/AbstractRouter'
import ErrorController from '../controller/ErrorController'

export default class ErrorRouter extends AbstractRouter {
  constructor(private readonly errorController: ErrorController) {
    super('/{*any}')
    this.routes()
  }

  protected override routes = (): void => {
    this.router.all(this.path, this.errorController.notFound)
  }
}
