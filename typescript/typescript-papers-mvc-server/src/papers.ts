import ErrorController from './controller/ErrorController'
import PapersController from './controller/PapersController'
import PapersExpress from './express/PapersExpress'
import PapersModel from './model/PapersModel'
import ErrorView from './view/ErrorView'
import PapersView from './view/PapersView'

const server = new PapersExpress(
  new PapersView(
    new PapersController(
      new PapersModel()
    )
  ),
  new ErrorView(
    new ErrorController()
  )
)

server.start()
