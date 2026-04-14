import type Subject from './Subject.js'

export default abstract class Observer {
  protected readonly subject: Subject

  protected constructor(subject: Subject) {
    this.subject = subject
  }

  abstract readonly update: () => void
}
