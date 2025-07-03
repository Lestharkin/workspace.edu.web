import Observer from './Observer.js'

export default abstract class Subject<T> {
  protected observers: Observer<T>[]

  constructor() {
    this.observers = []
  }

  readonly attach = (observer: Observer<T>) => {
    this.observers.push(observer)
  }

  readonly detach = (observer: Observer<T>) => {
    const index = this.observers.indexOf(observer)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  readonly notifyALL = () => {
    this.observers.forEach((observer) => observer.update())
  }
}
