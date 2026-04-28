import JobsRouter from './jobs/router/JobsRouter'
import JobsView from './jobs/view/JobsView'
import Server from './server/Server'

const main = () => {
  const jobsRouter = new JobsRouter(new JobsView())

  const server = new Server([jobsRouter])
  server.start()
}

main()
