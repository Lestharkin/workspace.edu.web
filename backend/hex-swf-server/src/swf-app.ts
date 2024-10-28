import ExpressFactory from './express/infrastructure/factory/ExpressFactory'

const server = ExpressFactory.create()
server.start()