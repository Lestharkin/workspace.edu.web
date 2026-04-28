import ApiRouter from '../../server/model/ApiRouter'
import JobsView from '../view/JobsView'

export default class JobsRouter extends ApiRouter {
  constructor(private readonly jobsView: JobsView) {
    super()
    this.routes()
  }

  override readonly routes = (): void => {
    this.router.get('/', this.jobsView.index)
  }
}
