import Subject from '../types/Subject.js';
export default class PioneerModel extends Subject {
    pioneers;
    constructor(pioneers) {
        super();
        this.pioneers = pioneers;
    }
    setPioneers(pioneers) {
        this.pioneers = pioneers;
        this.notifyAllObservers();
    }
    getPioneers() {
        return this.pioneers;
    }
    deletePioneer(id) {
        const index = this.pioneers.findIndex((pioneer) => pioneer.id === id);
        this.pioneers.splice(index, 1);
        this.notifyAllObservers();
    }
}
