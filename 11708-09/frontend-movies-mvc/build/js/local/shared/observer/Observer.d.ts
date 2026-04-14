import type Subject from './Subject.js';
export default abstract class Observer {
    protected readonly subject: Subject;
    protected constructor(subject: Subject);
    abstract readonly update: () => void;
}
//# sourceMappingURL=Observer.d.ts.map