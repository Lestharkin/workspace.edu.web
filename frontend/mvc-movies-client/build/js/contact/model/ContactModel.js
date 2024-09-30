export default class ContactModel {
    sendMessage = async (message) => {
        await fetch('http://localhost:1802/api/v1.0/contact/message/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });
    };
}
