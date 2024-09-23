export default class ContactModel {
  public registerMessage = (name: string, email: string, message: string): void => {
    console.log({ name, email, message })
  }
}