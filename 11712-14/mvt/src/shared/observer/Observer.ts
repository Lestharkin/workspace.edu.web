import type Subject from './Subject.js'

export default abstract class Observer {
  protected readonly subject: Subject

  protected constructor(subject: Subject) {
    this.subject = subject
    this.subject.attach(this)
  }

  abstract readonly update: () => void
}
