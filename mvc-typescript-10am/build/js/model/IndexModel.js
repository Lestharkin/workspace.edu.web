export default class IndexModel {
    pioneers;
    constructor() {
        this.pioneers = [];
    }
    init = async () => {
        this.pioneers = await this.getPioneersFromFile();
    };
    getPioneersFromFile = async () => {
        const response = await fetch('./database/data.json');
        if (response.status !== 200) {
            return [];
        }
        return await response.json();
    };
    getPioneers = () => {
        return this.pioneers;
    };
}
