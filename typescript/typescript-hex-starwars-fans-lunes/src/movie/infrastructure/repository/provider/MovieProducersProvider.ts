import AbstractPerson from "../../../domain/model/person/AbstractPerson"
import NullProducer from "../../../domain/model/producer/NullProducer"
import Producer from "../../../domain/model/producer/Producer"
import { isEmpty } from "../../../helper/Validator"
import MovieAbstractProvider from "./MovieAbstractProvider"

export default class MovieProducerProvider extends MovieAbstractProvider {
  public get = (producers : string): AbstractPerson[] => {
    const starwarsProducers = producers.split(", ")
    return starwarsProducers.map((starwarsProducer): AbstractPerson => {
      const {name, lastname} = this.splitNames(starwarsProducer)
      if(isEmpty(name) || isEmpty(lastname)) {
        return new NullProducer()
      }
      return new Producer(
        name,
        lastname
      )
    })
  }
}