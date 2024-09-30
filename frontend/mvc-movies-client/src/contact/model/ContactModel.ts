import Environment from '../../shared/Environment.js'
import Message from '../types/Message.js'

export default class ContactModel {
  public sendMessage = async (message: Message): Promise<void> => {
    await fetch(await Environment.getEndpointContactRegister(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
  }
}
