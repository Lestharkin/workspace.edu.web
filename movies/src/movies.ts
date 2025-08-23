import ServerFactory from './movie/infrastructure/adapter/api/factory/ServerFactory'

const server = ServerFactory.create()

server.start()
