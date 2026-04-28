import JobsModel from './jobs/model/JobsModel'
import JobsRouter from './jobs/router/JobsRouter'
import JobsView from './jobs/view/JobsView'
import Server from './server/Server'

const main = () => {
  const jobsRouter = new JobsRouter(new JobsView(new JobsModel()))

  const server = new Server([jobsRouter])
  server.start()
}

main()
