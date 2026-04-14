import type Observer from './Observer.js'

export default abstract class Subject {
  protected observers: Observer[]

  protected constructor() {
    this.observers = []
  }

  readonly attach = (observer: Observer) => {
    this.observers.push(observer)
  }

  readonly detach = (observer: Observer) => {
    this.observers = this.observers.filter((o) => o !== observer)
  }

  protected readonly notify = () => {
    this.observers.forEach((observer) => observer.update())
  }
}
