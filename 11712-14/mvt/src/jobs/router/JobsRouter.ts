import ApiRouter from '../../api/model/ApiRouter'
import JobsView from '../view/JobsView'

export default class JobsRouter extends ApiRouter {
  constructor(private readonly view: JobsView) {
    super()
    this.routes()
  }

  override readonly routes = () => {
    this.router.get('/', this.view.index)
  }
}
