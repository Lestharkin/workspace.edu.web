var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("TS -> JS");
var _num = 123;
console.log("Number int = ".concat(_num.toString() + " "));
_num = 123.456;
console.log("Number float = ".concat(_num.toString() + " "));
var _boo = true;
console.log("Boolean = ".concat(_boo.toString()));
var _str = "text";
console.log("String = ".concat(_str.toString()));
var _any = "any";
console.log("Any = ".concat(_any.toString()));
_any = false;
console.log("Any = ".concat(_any.toString()));
var PI = 3.1416;
console.log("Constant: PI = ".concat(PI.toString()));
// num to string
_str = 123 + " string";
console.log("toConcatenate = ".concat(_str));
console.log("# Arrays");
var out;
var _numArray = [0, 1, 2];
out = 'Number array = [';
_numArray.forEach(function (i) { out += " ".concat(i, " "); });
console.log(out + ']');
var _booArray = [true, false];
out = 'Boolean array = [';
_booArray.forEach(function (i) { out += " ".concat(i, " "); });
console.log(out + ']');
var _strArray = ["text0", "text1", "test2"];
out = 'String array = [';
_strArray.forEach(function (i) { out += " ".concat(i, " "); });
console.log(out + ']');
var _arrayAny = [0, true, "text0", [1, 2, 3], { attr1: "value 1", attr2: "value 2" }];
out = 'Any array = [';
_arrayAny.forEach(function (index) {
    if (typeof (index) === "number") {
        out += " ".concat(index, " ");
    }
    if (typeof (index) === "string") {
        out += " ".concat(index, " ");
    }
    if (Array.isArray(index)) {
        out += " [".concat(index, "] ");
    }
});
out += "{".concat(Object.keys(_arrayAny[4]).map(function (key) { return "".concat(key, ": ").concat(_arrayAny[4][key]); }), "}");
console.log(out + ']');
console.log("# Tuple");
var _tuple = ["text", 1];
console.log("Tuple = ".concat(_tuple.toString()));
console.log("# Void, Undefined, Null");
var _void = undefined;
console.log("Void = ".concat(typeof (_void)));
var _null = null;
console.log("Null = ".concat(typeof (_null)));
var _undefined = undefined;
console.log("Undefined = ".concat(typeof (_undefined)));
console.log("# Functions");
function add(n1, n2) {
    return n1 + n2;
}
console.log("add = ".concat(add(1, 3)));
var less = function (n1, n2) { return n1 - n2; };
console.log("less = ".concat(less(1, 3)));
var addFunc = function add(n1, n2) {
    if (typeof (n1) === "string") {
        n1 = parseInt(n1);
    }
    if (typeof (n2) === "string") {
        n2 = parseInt(n2);
    }
    return n1 + n2;
};
console.log("addFun = ".concat(addFunc(1, 3)));
var _voidFunc = function () {
    console.log("-- void function -->");
};
_voidFunc();
console.log("# Interface - Class");
function testInterface(student) {
    return "testInterface = ".concat(student.id, ", ").concat(student.names, ", ").concat(student.lastNames, ", ").concat(student.age);
}
console.log("".concat(testInterface({ id: 1, names: 'lenin', lastNames: 'serrano', age: 18 })));
console.log("".concat(testInterface({ id: 1, names: 'lenin', lastNames: 'serrano' })));
var User = /** @class */ (function () {
    function User(id, names, lastNames, age, address) {
        this.id = id;
        this.names = names;
        this.lastNames = lastNames;
        this.age = age;
        this._address = address;
    }
    User.prototype.getString = function () {
        return "".concat(this.id, ", ").concat(this.names, ", ").concat(this.lastNames, ", ").concat(this.age, ", ").concat(this.address);
    };
    Object.defineProperty(User.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User(123, 'lenin', 'serrano', 20, 'calle 1 con 2');
console.log(user.getString());
console.log("Class extends");
var ChildOfUser = /** @class */ (function (_super) {
    __extends(ChildOfUser, _super);
    function ChildOfUser(childOfUser) {
        return _super.call(this, childOfUser.id, childOfUser.names, childOfUser.lastNames, childOfUser.age, childOfUser.address) || this;
    }
    return ChildOfUser;
}(User));
var childOfUser = new ChildOfUser({ id: 98, names: 'javier', lastNames: 'gil', age: 18, address: 'calle 2 con 1' });
console.log(childOfUser.getString());
