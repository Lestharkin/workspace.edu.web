console.log("TS -> JS");

const getElement = (selector: string): HTMLElement | null => document.querySelector(selector);
const dis = getElement('.display');

if (dis) {

    dis.innerHTML = `<h3>Types</h3>`;

    let _num: number = 123;
    dis.innerHTML += `<p>Number int = ${_num.toString() + " "}</p>`;

    _num = 123.456;
    dis.innerHTML += `<p>Number float = ${_num.toString() + " "}</p>`;

    let _boo: boolean = true;
    dis.innerHTML += `<p>Boolean = ${_boo.toString()}</p>`;

    let _str: string = "text";
    dis.innerHTML += `<p>String = ${_str.toString()}</p>`;


    let _any: any = "any";
    dis.innerHTML += `<p>Any = ${_any.toString()}</p>`;
    _any = false;
    dis.innerHTML += `<p>Any = ${_any.toString()}</p>`;

    const PI: number = 3.1416;
    dis.innerHTML += `<p>Constant: PI = ${PI.toString()}</p>`;

    // num to string
    _str = 123 + " string";
    dis.innerHTML += `<p>toConcatenate = ${_str}</p>`;

    dis.innerHTML += `<h3>Arrays</h3>`;

    let out: string;

    let _numArray: number[] = [0, 1, 2];
    out = '<p>Number array = [';
    _numArray.forEach(i => { out += ` ${i} ` });
    dis.innerHTML += out + ']</p>';

    let _booArray: boolean[] = [true, false];
    out = '<p>Boolean array = [';
    _booArray.forEach(i => { out += ` ${i} ` });
    dis.innerHTML += out + ']</p>';

    let _strArray: string[] = ["text0", "text1", "test2"];
    out = '<p>String array = [';
    _strArray.forEach(i => { out += ` ${i} ` });
    dis.innerHTML += out + ']</p>';

    let _arrayAny: any[] = [0, true, "text0", [1, 2, 3], { attr1: "value 1", attr2: "value 2" }];
    out = '<p>Any array = [';
    _arrayAny.forEach(index => {
        if (typeof (index) === "number") {
            out += ` ${index} `
        }
        if (typeof (index) === "string") {
            out += ` ${index} `
        }
        if (Array.isArray(index)) {
            out += ` [${index}] `
        }
    });
    out += `{${Object.keys(_arrayAny[4]).map(key => `${key}: ${_arrayAny[4][key]}`)}}`;
    dis.innerHTML += out + ']</p>';

    dis.innerHTML += `<h3>Tuple</h3>`;
    let _tuple: [string, number] = ["text", 1];
    dis.innerHTML += `<p>Tuple = ${_tuple.toString()}</p>`;

    dis.innerHTML += `<h3>Void, Undefined, Null</h3>`;
    let _void: void = undefined;
    dis.innerHTML += `<p>Void = ${typeof (_void)}</p>`;
    let _null: null = null;
    dis.innerHTML += `<p>Null = ${typeof (_null)}</p>`;
    let _undefined: undefined = undefined;
    dis.innerHTML += `<p>Undefined = ${typeof (_undefined)}</p>`;

    dis.innerHTML += `<h3>Functions</h3>`;
    function add(n1: number, n2: number): number {
        return n1 + n2;
    }
    dis.innerHTML += `<p>add = ${add(1, 3)}</p>`;

    const less = (n1: number, n2: number): number => n1 - n2;
    dis.innerHTML += `<p>less = ${less(1, 3)}</p>`;

    const addFunc = function add(
        n1: number | string,
        n2: number | string
    ): number {
        if (typeof (n1) === "string") {
            n1 = parseInt(n1)
        }
        if (typeof (n2) === "string") {
            n2 = parseInt(n2);
        }
        return n1 + n2;
    }
    dis.innerHTML += `<p>addFun = ${addFunc(1, 3)}</p>`;

    const _voidFunc = (): void => {
        dis.innerHTML += `<p>-- void function --</p>`;
    }
    _voidFunc();

    dis.innerHTML += `<h3>Interface - Class</h3>`;

    interface StudentInterface {
        id: number;
        names: string;
        lastNames: string;
        age?: number;
    }

    function testInterface(student: StudentInterface): string {
        return `<p>testInterface = ${student.id}, ${student.names}, ${student.lastNames}, ${student.age}</p>`;
    }
    dis.innerHTML += `${testInterface({ id: 1, names: 'lenin', lastNames: 'serrano', age: 18 })}`;
    dis.innerHTML += `${testInterface({ id: 1, names: 'lenin', lastNames: 'serrano' })}`;

    class User implements StudentInterface {
        public id: number;
        public names: string;
        public lastNames: string;
        public age: number;
        private _address: string;

        constructor(id: number, names: string, lastNames: string, age: number, address: string) {
            this.id = id;
            this.names = names;
            this.lastNames = lastNames;
            this.age = age;
            this._address = address;
        }

        public getString(): string {
            return `${this.id}, ${this.names}, ${this.lastNames}, ${this.age}, ${this.address}`;
        }

        public set address(address: string) {
            this._address = address;
        }

        public get address(): string {
            return this._address;
        }
    }

    const user = new User(123, 'lenin', 'serrano', 20, 'calle 1 con 2');
    dis.innerHTML += user.getString();

    dis.innerHTML += `<h3>Class extends</h3>`;

    class ChildOfUser extends User {

        constructor(id: number, names: string, lastNames: string, age: number, address: string) {
            super(id, names, lastNames, age, address);
        }
    }

    const childOfUser = new ChildOfUser(987, 'javier', 'gil', 18, 'calle 2 con 1');
    dis.innerHTML += childOfUser.getString();

}