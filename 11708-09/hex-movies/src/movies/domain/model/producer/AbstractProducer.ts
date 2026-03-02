import Role from '../enum/Role'
import Person from '../person/Person'

export default class AbstractProducer extends Person {
  private role: Role

  constructor(id: string, names: string, surnames: string, role: Role) {
    super(id, names, surnames)
    this.role = role
  }

  readonly getRole = (): Role => this.role

  readonly setRole = (role: Role): void => {
    this.role = role
  }
}
