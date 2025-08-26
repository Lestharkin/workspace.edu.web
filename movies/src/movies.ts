import ServerFactory from './api/infrastructure/adapter/api/factory/ServerFactory'

const server = ServerFactory.create()

server.start()
