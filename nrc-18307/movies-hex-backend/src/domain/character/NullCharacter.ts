import AbstractCharacter from "./AbstractCharacter";

export default class NullCharacter extends AbstractCharacter {
  constructor() {
    super({ names: "N/A", surnames: "N/A", birthYear: new Date(0) });
  }

  /*public isNull(): boolean {
    return true;
  }*/
 
}
