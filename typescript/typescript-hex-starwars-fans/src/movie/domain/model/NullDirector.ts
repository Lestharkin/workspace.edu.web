import AbstractPerson from "./AbstractPerson";

export default class NullDirector extends AbstractPerson {
  constructor() {
    super(
      'not found name in database',
      'not found lastname in database',
    )
  }
  
  public isNull(): boolean {
    return true
  }
}