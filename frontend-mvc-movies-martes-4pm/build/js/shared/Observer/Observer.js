export default class Observer {
    subject;
    constructor(subject) {
        this.subject = subject;
        this.subject.attach(this);
    }
}
