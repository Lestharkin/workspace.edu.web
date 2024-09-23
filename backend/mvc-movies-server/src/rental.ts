import Client from './client/Client'
import Server from './express/Server'
import Movies from './movies/Movies'

const moviesView = Movies.createView()

const clientView = Client.createView()

const server = new Server(moviesView, clientView)
server.start()
