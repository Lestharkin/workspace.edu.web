console.log("TS -> JS");

let _num: number = 123;
console.log(`Number int = ${_num.toString() + " "}`);

_num = 123.456;
console.log(`Number float = ${_num.toString() + " "}`);

let _boo: boolean = true;
console.log(`Boolean = ${_boo.toString()}`);

let _str: string = "text";
console.log(`String = ${_str.toString()}`);

let _any: any = "any";
console.log(`Any = ${_any.toString()}`);
 _any = false;
console.log(`Any = ${_any.toString()}`);

const PI: number = 3.1416;
console.log(`Constant: PI = ${PI.toString()}`);

// num to string
_str = 123 + " string";
console.log(`toConcatenate = ${_str}`);

console.log(`# Arrays`);

let out: string;

let _numArray: number[] = [0, 1, 2];
out = 'Number array = [';
_numArray.forEach(i => { out += ` ${i} ` });
console.log(out + ']');

let _booArray: boolean[] = [true, false];
out = 'Boolean array = [';
_booArray.forEach(i => { out += ` ${i} ` });
console.log(out + ']');

let _strArray: string[] = ["text0", "text1", "test2"];
out = 'String array = [';
_strArray.forEach(i => { out += ` ${i} ` });
console.log(out + ']');

let _arrayAny: any[] = [0, true, "text0", [1, 2, 3], { attr1: "value 1", attr2: "value 2" }];
out = 'Any array = [';
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
console.log(out + ']');

console.log(`# Tuple`);
let _tuple: [string, number] = ["text", 1];
console.log(`Tuple = ${_tuple.toString()}`);

console.log(`# Void, Undefined, Null`);
let _void: void = undefined;
console.log(`Void = ${typeof (_void)}`);
let _null: null = null;
console.log(`Null = ${typeof (_null)}`);
let _undefined: undefined = undefined;
console.log(`Undefined = ${typeof (_undefined)}`);

console.log(`# Functions`);
function add(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(`add = ${add(1, 3)}`);

const less = (n1: number, n2: number): number => n1 - n2;
console.log(`less = ${less(1, 3)}`);

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
console.log(`addFun = ${addFunc(1, 3)}`);

  const _voidFunc = (): void => {
  console.log(`-- void function -->`);
  }
  _voidFunc();

console.log(`# Interface - Class`);

interface StudentInterface {
    id: number;
    names: string;
    lastNames: string;
    age?: number;
}

function testInterface(student: StudentInterface): string {
    return `testInterface = ${student.id}, ${student.names}, ${student.lastNames}, ${student.age}`;
}
console.log(`${testInterface({ id: 1, names: 'lenin', lastNames: 'serrano', age: 18 })}`);
console.log(`${testInterface({ id: 1, names: 'lenin', lastNames: 'serrano' })}`);

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
console.log(user.getString());

console.log(`Class extends`);

  class ChildOfUser extends User {

      constructor(id: number, names: string, lastNames: string, age: number, address: string) {
          super(id, names, lastNames, age, address);
      }
  }

const childOfUser = new ChildOfUser(987, 'javier', 'gil', 18, 'calle 2 con 1');
console.log(childOfUser.getString());