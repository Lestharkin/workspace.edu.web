import AbstractPerson from '../person/AbstractPerson'

export default class Director extends AbstractPerson {
  public isNull(): boolean {
    return false
  }
}