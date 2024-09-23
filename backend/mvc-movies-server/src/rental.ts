import Client from './client/Client'
import Contact from './contact/Contact'
import Server from './express/Server'
import Movies from './movies/Movies'

const contactView = Contact.createView()

const moviesView = Movies.createView()

const clientView = Client.createView()

const server = new Server(moviesView, clientView, contactView)
server.start()
