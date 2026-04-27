import Server from './api/Server'
import JobsRouter from './jobs/router/JobsRouter'

const main = () => {
  const server = new Server([new JobsRouter()])
  server.start()
}

main()
