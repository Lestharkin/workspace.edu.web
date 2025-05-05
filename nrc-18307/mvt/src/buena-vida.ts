import ExpressProvider from './server/provider/ExpressProvider'
import Server from './server/server'

const env = new ExpressProvider()

const server = new Server(env, [])
server.start()
