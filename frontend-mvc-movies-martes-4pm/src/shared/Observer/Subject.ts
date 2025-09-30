import Observer from './Observer.js'

export default abstract class Subject<T> {
  private readonly observers: Observer<T>[]

  constructor() {
    this.observers = []
  }

  readonly attach = (observer: Observer<T>): void => {
    this.observers.push(observer)
  }

  readonly detach = (observer: Observer<T>): void => {
    const index = this.observers.indexOf(observer)
    this.observers.splice(index, 1)
  }

  readonly notifyAllObservers = (): void => {
    this.observers.forEach((observer) => observer.update())
  }
}
