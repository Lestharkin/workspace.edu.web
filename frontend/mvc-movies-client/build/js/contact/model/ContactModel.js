import Environment from '../../shared/Environment.js';
export default class ContactModel {
    init = () => {
        console.log('ContactModel.init()');
    };
    sendMessage = async (message) => {
        return await fetch(await Environment.getEndpointContactRegister(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    };
}
