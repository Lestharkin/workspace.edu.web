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
var getElement = function (selector) { return document.querySelector(selector); };
var dis = getElement('.display');
if (dis) {
    dis.innerHTML = "<h3>Types</h3>";
    var _num = 123;
    dis.innerHTML += "<p>Number int = ".concat(_num.toString() + " ", "</p>");
    _num = 123.456;
    dis.innerHTML += "<p>Number float = ".concat(_num.toString() + " ", "</p>");
    var _boo = true;
    dis.innerHTML += "<p>Boolean = ".concat(_boo.toString(), "</p>");
    var _str = "text";
    dis.innerHTML += "<p>String = ".concat(_str.toString(), "</p>");
    var _any = "any";
    dis.innerHTML += "<p>Any = ".concat(_any.toString(), "</p>");
    _any = false;
    dis.innerHTML += "<p>Any = ".concat(_any.toString(), "</p>");
    var PI = 3.1416;
    dis.innerHTML += "<p>Constant: PI = ".concat(_any.toString(), "</p>");
    // num to string
    _str = 123 + " string";
    dis.innerHTML += "<p>toConcatenate = ".concat(_str, "</p>");
    dis.innerHTML += "<h3>Arrays</h3>";
    var out_1;
    var _numArray = [0, 1, 2];
    out_1 = '<p>Number array = [';
    _numArray.forEach(function (i) { out_1 += " ".concat(i, " "); });
    dis.innerHTML += out_1 + ']</p>';
    var _booArray = [true, false];
    out_1 = '<p>Boolean array = [';
    _booArray.forEach(function (i) { out_1 += " ".concat(i, " "); });
    dis.innerHTML += out_1 + ']</p>';
    var _strArray = ["text0", "text1", "test2"];
    out_1 = '<p>String array = [';
    _strArray.forEach(function (i) { out_1 += " ".concat(i, " "); });
    dis.innerHTML += out_1 + ']</p>';
    var _arrayAny_1 = [0, true, "text0", [1, 2, 3], { attr1: "value 1", attr2: "value 2" }];
    out_1 = '<p>Any array = [';
    _arrayAny_1.forEach(function (index) {
        if (typeof (index) === "number") {
            out_1 += " ".concat(index, " ");
        }
        if (typeof (index) === "string") {
            out_1 += " ".concat(index, " ");
        }
        if (Array.isArray(index)) {
            out_1 += " [".concat(index, "] ");
        }
    });
    out_1 += "{".concat(Object.keys(_arrayAny_1[4]).map(function (key) { return "".concat(key, ": ").concat(_arrayAny_1[4][key]); }), "}");
    dis.innerHTML += out_1 + ']</p>';
    dis.innerHTML += "<h3>Tuple</h3>";
    var _tuple = ["text", 1];
    dis.innerHTML += "<p>Tuple = ".concat(_tuple.toString(), "</p>");
    dis.innerHTML += "<h3>Void, Undefined, Null</h3>";
    var _void = undefined;
    dis.innerHTML += "<p>Void = ".concat(typeof (_void), "</p>");
    var _null = null;
    dis.innerHTML += "<p>Null = ".concat(typeof (_null), "</p>");
    var _undefined = undefined;
    dis.innerHTML += "<p>Undefined = ".concat(typeof (_undefined), "</p>");
    dis.innerHTML += "<h3>Functions</h3>";
    function add(n1, n2) {
        return n1 + n2;
    }
    dis.innerHTML += "<p>add = ".concat(add(1, 3), "</p>");
    var less = function (n1, n2) { return n1 - n2; };
    dis.innerHTML += "<p>less = ".concat(less(1, 3), "</p>");
    var addFunc = function add(n1, n2) {
        if (typeof (n1) === "string") {
            n1 = parseInt(n1);
        }
        if (typeof (n2) === "string") {
            n2 = parseInt(n2);
        }
        return n1 + n2;
    };
    dis.innerHTML += "<p>addFun = ".concat(addFunc(1, 3), "</p>");
    var _voidFunc = function () {
        dis.innerHTML += "<p>-- void function --</p>";
    };
    _voidFunc();
    dis.innerHTML += "<h3>Interface - Class</h3>";
    function testInterface(student) {
        return "<p>testInterface = ".concat(student.id, ", ").concat(student.names, ", ").concat(student.lastNames, ", ").concat(student.age, "</p>");
    }
    dis.innerHTML += "".concat(testInterface({ id: 1, names: 'lenin', lastNames: 'serrano', age: 18 }));
    dis.innerHTML += "".concat(testInterface({ id: 1, names: 'lenin', lastNames: 'serrano' }));
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
    dis.innerHTML += user.getString();
    dis.innerHTML += "<h3>Class extends</h3>";
    var ChildOfUser = /** @class */ (function (_super) {
        __extends(ChildOfUser, _super);
        function ChildOfUser(id, names, lastNames, age, address) {
            return _super.call(this, id, names, lastNames, age, address) || this;
        }
        return ChildOfUser;
    }(User));
    var childOfUser = new ChildOfUser(987, 'javier', 'gil', 18, 'calle 2 con 1');
    dis.innerHTML += childOfUser.getString();
}
