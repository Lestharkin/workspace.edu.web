import type Subject from './Subject.js'

export default abstract class Observer {
  protected readonly subjects: Subject

  protected constructor(subjects: Subject) {
    this.subjects = subjects
    this.subjects.attach(this)
  }

  abstract readonly update: () => void
}
