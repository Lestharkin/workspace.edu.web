console.log("TS -> JS");
const getElement = (selector) => document.querySelector(selector);
const dis = getElement('.display');
if (dis != null) {
    dis.innerHTML = `<h3>Types</h3>`;
    let _num = 123;
    let _otro = 7654;
    dis.innerHTML += `<p>Number int = ${_num.toString() + " "}</p>`;
    _num = 123.456;
    dis.innerHTML += `<p>Number float = ${_num.toString() + " "}</p>`;
    let _boo = true;
    dis.innerHTML += `<p>Boolean = ${_boo.toString()}</p>`;
    let _str = "text";
    dis.innerHTML += `<p>String = ${_str.toString()}</p>`;
    let _any = "any";
    dis.innerHTML += `<p>Any = ${_any.toString()}</p>`;
    _any = false;
    dis.innerHTML += `<p>Any = ${_any.toString()}</p>`;
    const PI = 3.1416;
    dis.innerHTML += `<p>Constant: PI = ${PI.toString()}</p>`;
    // num to string
    _str = 123 + " string";
    dis.innerHTML += `<p>toConcatenate = ${_str}</p>`;
    dis.innerHTML += `<h3>Arrays</h3>`;
    let out;
    let _numArray = [0, 1, 2];
    out = '<p>Number array = [';
    _numArray.forEach(i => { out += ` ${i} `; });
    dis.innerHTML += out + ']</p>';
    let _booArray = [true, false];
    out = '<p>Boolean array = [';
    _booArray.forEach(i => { out += ` ${i} `; });
    dis.innerHTML += out + ']</p>';
    let _strArray = ["text0", "text1", "test2"];
    out = '<p>String array = [';
    _strArray.forEach(i => { out += ` ${i} `; });
    dis.innerHTML += out + ']</p>';
    let _arrayAny = [0, true, "text0", [1, 2, 3], { attr1: "value 1", attr2: "value 2" }];
    out = '<p>Any array = [';
    _arrayAny.forEach(index => {
        if (typeof (index) === "number") {
            out += ` ${index} `;
        }
        if (typeof (index) === "string") {
            out += ` ${index} `;
        }
        if (Array.isArray(index)) {
            out += ` [${index}] `;
        }
    });
    out += `{${Object.keys(_arrayAny[4]).map(key => `${key}: ${_arrayAny[4][key]}`)}}`;
    dis.innerHTML += out + ']</p>';
    dis.innerHTML += `<h3>Tuple</h3>`;
    let _tuple = ["text", 1];
    dis.innerHTML += `<p>Tuple = ${_tuple.toString()}</p>`;
    dis.innerHTML += `<h3>Void, Undefined, Null</h3>`;
    let _void = undefined;
    dis.innerHTML += `<p>Void = ${typeof (_void)}</p>`;
    let _null = null;
    dis.innerHTML += `<p>Null = ${typeof (_null)}</p>`;
    let _undefined = undefined;
    dis.innerHTML += `<p>Undefined = ${typeof (_undefined)}</p>`;
    dis.innerHTML += `<h3>Functions</h3>`;
    function add(n1, n2) {
        return n1 + n2;
    }
    dis.innerHTML += `<p>add = ${add(1, 3)}</p>`;
    const sub = (n1, n2) => n1 - n2;
    dis.innerHTML += `<p>less = ${sub(1, 3)}</p>`;
    const addFunc = function add(n1, n2) {
        if (typeof (n1) === "string") {
            n1 = parseInt(n1);
        }
        if (typeof (n2) === "string") {
            n2 = parseInt(n2);
        }
        return n1 + n2;
    };
    dis.innerHTML += `<p>addFun = ${addFunc(1, 3)}</p>`;
    const _voidFunc = () => {
        dis.innerHTML += `<p>-- void function --</p>`;
    };
    _voidFunc();
    dis.innerHTML += `<h3>Interface - Class</h3>`;
    function testInterface(student) {
        return `<p>testInterface = ${student.id}, ${student.names}, ${student.lastNames}, ${student.age}</p>`;
    }
    dis.innerHTML += `${testInterface({ id: 1, names: 'lenin', lastNames: 'serrano', age: 18 })}`;
    dis.innerHTML += `${testInterface({ id: 1, names: 'lenin', lastNames: 'serrano' })}`;
    class User {
        constructor(id, names, lastNames, age, address) {
            this.id = id;
            this.names = names;
            this.lastNames = lastNames;
            this.age = age;
            this._address = address;
        }
        getString() {
            return `${this.id}, ${this.names}, ${this.lastNames}, ${this.age}, ${this.address}`;
        }
        set address(address) {
            this._address = address;
        }
        get address() {
            return this._address;
        }
    }
    const user = new User(123, 'lenin', 'serrano', 20, 'calle 1 con 2');
    dis.innerHTML += user.getString();
    dis.innerHTML += `<h3>Class extends</h3>`;
    class ChildOfUser extends User {
        constructor(id, names, lastNames, age, address) {
            super(id, names, lastNames, age, address);
        }
    }
    const childOfUser = new ChildOfUser(987, 'javier', 'gil', 18, 'calle 2 con 1');
    dis.innerHTML += childOfUser.getString();
}
