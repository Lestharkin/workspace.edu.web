import AbstractMovie from "./AbstractMovie";
import NullDirector from "./NullDirector";

export default class NullMovie extends AbstractMovie {
  constructor() {
    super(
      "not found title in database", 
      0,
      "not found opening in database", 
      new Date(),
      [], 
      new NullDirector()
    )
  }

  public isNull(): boolean {
    return true
  }
}