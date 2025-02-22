import AbstractDirector from "./AbstractDirector";

export default class NullDirector extends AbstractDirector {
  constructor() {
    super({
      names: "NA",
      surnames: "N/A",
      yearsOfExperience: 0,
    });
  }

 
}
