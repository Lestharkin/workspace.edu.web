import Subject from './Subject'

export default abstract class Observer<T> {
  protected subject: Subject<T>
  public abstract update(): void

  constructor(subject: Subject<T>) {
    this.subject = subject
    this.subject.attach(this)
  }
}
