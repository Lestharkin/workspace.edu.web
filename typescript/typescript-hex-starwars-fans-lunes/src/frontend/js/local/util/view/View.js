export default class View {
    view;
    parent;
    templete;
    constructor(parent, templete) {
        this.view = document.createElement('div');
        this.parent = parent;
        this.templete = templete;
    }
    load = async () => {
        const response = await fetch(this.templete);
        const htmlText = await response.text();
        const parser = new DOMParser();
        const docFragment = parser.parseFromString(htmlText, "text/html");
        this.view = docFragment.body.firstChild;
        this.parent.appendChild(this.view);
    };
    get = () => {
        return this.view;
    };
}
