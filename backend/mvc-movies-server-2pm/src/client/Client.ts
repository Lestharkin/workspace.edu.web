import ClientController from './controller/ClientController'
import ClientView from './view/ClientView'

export default class Client {
  public static readonly createView = (): ClientView => {
    const clientController = new ClientController()
    return new ClientView(clientController)
  }
}
