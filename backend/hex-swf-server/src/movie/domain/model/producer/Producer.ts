import Person from './Person'

export default class Producer extends Person {
  constructor(producer: ProducerAttributes) {
    super({
      name: producer.name,
      lastname: producer.lastname,
    })
  }

  public override isNull = (): boolean => {
    return false
  }
  
}

export interface ProducerAttributes {
  name: string
  lastname: string
}
