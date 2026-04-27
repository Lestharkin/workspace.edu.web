import Server from './api/Server'
import JobsRouter from './jobs/router/JobsRouter'
import JobsView from './jobs/view/JobsView'

const main = () => {
  const server = new Server([new JobsRouter(new JobsView())])
  server.start()
}

main()
