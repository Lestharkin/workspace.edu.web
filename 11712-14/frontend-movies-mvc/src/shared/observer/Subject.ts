import type Observer from './Observer.js'

export default abstract class Subject {
  private observers: Observer[]

  protected constructor() {
    this.observers = [] as Observer[]
  }

  readonly attach = (observer: Observer) => {
    this.observers.push(observer)
  }

  readonly detach = (observer: Observer) => {
    this.observers = this.observers.filter((o) => o !== observer)
  }

  readonly notify = () => {
    this.observers.forEach((observer) => observer.update())
  }
}
