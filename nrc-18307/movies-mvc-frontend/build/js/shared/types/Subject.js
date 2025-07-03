export default class Subject {
    observers;
    constructor() {
        this.observers = [];
    }
    attach = (observer) => {
        this.observers.push(observer);
    };
    detach = (observer) => {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    notifyALL = () => {
        this.observers.forEach((observer) => observer.update());
    };
}
