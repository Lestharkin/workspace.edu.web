import Person, {
  PersonInterface,
} from '../../../../shared/base/domain/abstracts/Person'
import Role from './Role'

export default class Producer extends Person {
  private role: Role
  override isNull: boolean

  constructor(producer: ProducerInterface) {
    super(producer)
    this.role = producer.role
    this.isNull = false
  }

  getRole = (): Role => this.role

  setRole = (role: Role): void => {
    this.role = role
  }
}

export interface ProducerInterface extends PersonInterface {
  role: Role
}
