import ServerFactory from './express/infrastructure/factory/ServerFactory'

const server = ServerFactory.create([])
server.start()
