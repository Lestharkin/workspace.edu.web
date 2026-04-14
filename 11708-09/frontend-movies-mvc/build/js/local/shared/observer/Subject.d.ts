import type Observer from './Observer.js';
export default abstract class Subject {
    protected observers: Observer[];
    protected constructor();
    readonly attach: (observer: Observer) => void;
    readonly detach: (observer: Observer) => void;
    protected readonly notify: () => void;
}
//# sourceMappingURL=Subject.d.ts.map