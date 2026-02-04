import Server from './server/Server.js'

try {
  const server = new Server()
  server.start()
} catch (error) {
  console.error('Error starting server:', error)
}
