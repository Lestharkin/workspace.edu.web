import Subject from './Subject.js'

export default abstract class Observer<T> {
  protected subject: Subject<T>

  abstract readonly update: () => void

  constructor(subject: Subject<T>) {
    this.subject = subject
    this.subject.attach(this)
  }
}
