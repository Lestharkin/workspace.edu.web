import Server from './api/Server'
import JobsModel from './jobs/model/JobsModel'
import JobsRouter from './jobs/router/JobsRouter'
import JobsView from './jobs/view/JobsView'

const main = () => {
  const jobsView = new JobsView(new JobsModel())
  const server = new Server([new JobsRouter(jobsView)])
  server.start()
}

main()
