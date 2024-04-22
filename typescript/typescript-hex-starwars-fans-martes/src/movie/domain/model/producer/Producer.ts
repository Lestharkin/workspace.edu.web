import AbstractPerson from '../person/AbstractPerson'

export default class Producer extends AbstractPerson {
  public isNull(): boolean {
    return false
  }
}