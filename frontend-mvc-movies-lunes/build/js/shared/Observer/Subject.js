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
        this.observers.splice(index, 1);
    };
    notifyAllObservers = () => {
        this.observers.forEach((observer) => observer.update());
    };
}
