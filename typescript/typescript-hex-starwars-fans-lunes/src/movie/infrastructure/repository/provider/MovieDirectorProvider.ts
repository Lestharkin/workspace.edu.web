import Director from "../../../domain/model/director/Director"
import NullDirector from "../../../domain/model/director/NullDirector"
import AbstractPerson from "../../../domain/model/person/AbstractPerson"
import { isEmpty } from "../../../helper/Validator"
import MovieAbstractProvider from "./MovieAbstractProvider"

export default class MovieDirectorProvider extends MovieAbstractProvider {
  public get = (director: string): AbstractPerson => {
    const {name, lastname} = this.splitNames(director)
    if(isEmpty(name) || isEmpty(lastname)) {
      return new NullDirector()
    }
    return new Director(
      name,      
      lastname
    )
  }
}