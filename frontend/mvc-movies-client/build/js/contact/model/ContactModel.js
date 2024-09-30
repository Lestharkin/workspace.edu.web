import Environment from '../../shared/Environment.js';
export default class ContactModel {
    sendMessage = async (message) => {
        await fetch(await Environment.getEndpointContactRegister(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    };
}
