import Observer from './Observer'

export default abstract class Subject<T> {
  private observers: Observer<T>[]

  constructor() {
    this.observers = []
  }

  public attach(observer: Observer<T>): void {
    this.observers.push(observer)
  }

  public detach(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer)
    this.observers.splice(index, 1)
  }

  public notifyAllObservers(): void {
    this.observers.forEach((observer) => observer.update())
  }
}
