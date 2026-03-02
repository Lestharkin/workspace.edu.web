import HTTPStatusCode from '../status/HTTPStatusCode'

export default abstract class ApiController {
  protected readonly STATUS = HTTPStatusCode
}
