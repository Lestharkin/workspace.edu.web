import Subject from './Subject.js'

export default abstract class Observer<T> {
  constructor(protected readonly subject: Subject<T>) {
    this.subject.attach(this)
  }

  abstract readonly update: () => void
}
