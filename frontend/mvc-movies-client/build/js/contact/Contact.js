import ContactController from "./controller/ContactController.js";
import ContactModel from "./model/ContactModel.js";
import ContactView from "./view/ContactView.js";
export default class Contact {
    static create = () => {
        const view = new ContactView();
        const model = new ContactModel();
        return new ContactController(view, model);
    };
}
