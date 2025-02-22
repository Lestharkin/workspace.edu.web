import AbstractProducer from "./AbstractProducer";

export default class NullProducer extends AbstractProducer {
  constructor() {
    super({ 
        names: "N/A", 
        surnames: "N/A",
         budget: 0 });
  }

 
}
