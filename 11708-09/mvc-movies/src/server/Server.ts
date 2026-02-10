import type { Application } from 'express'

export default class Server {
  private readonly app: Application

  readonly start = () => {
    console.log('Server started')
  }
}
