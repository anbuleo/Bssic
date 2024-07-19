/*Strong type

we must decalare and assign the what type of data can be stores in the variable*/
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
var value = "This is String";
value = '1';
console.log(value);
// value = function (1,2){return `${1+2}`}
/** data types in typeScript same as javaScript primitive and Non-primitive
 */
var myString = 'I am a string value';
var myNumber = 123;
var myBoolean = true;
var myNull = null;
var myUndefined = undefined;
// let myBigint: bigint = 1000n;
// let mySymbol : symbol = Symbol("unique");
//function
var add = function (x, y) { return x + y; };
console.log(add(1, 2));
//Special Types
//Any: Represents any type. Useful for gradual migration
var anything = 'could be any thng ';
//Unknown : similar to 'any' but safer type assertions or checks are requried before use 
var notsure = 4;
//void: Represents thr absence of any type, commonly used as the return type of functions that do not return value
// function logMessage(): void {console.log('hello world')};
//Never : represents the type of the values that never occur, used for functions that throw an error or have infinte loops,
// function error(message: string): never {
//     throw new Error(message)
// }
//Object types 
//Object: Represents non-primitive types 
var obj = { name: 'anbu' };
// TypeScript-specific Types
// Tuple 
// Tuple: represents a fixed length array with specified dtypes for each element
var tuple = ['hello', 2];
//Enum 
//Enum : rRepresent a set of named constants 
// enum Colors {
//     Red,
//     Green,
//     Blue,
// }
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
function moves(direction) {
    console.log("".concat(Directions[direction].toLowerCase()));
}
moves(Directions.Left);
// let c:Colors = Colors.Blue;
//Array
//Array : Respresents a collection of values of a specific type.
var list = [1, 2, 3, 4, 5, 6, 7];
//Union 
//Union : Represents a value that can be one of several types
var valuea = 'anbu';
;
;
var combined = { a: 'hello', b: 42 };
var valueb = 123;
//Literal Types
//String Literals: Specific string values 
// let direction : 'up' | 'down' = "up";
//Numeric Literals : specific numeric values ;
var one = 1;
//Boolean Literals : 'true' or 'false'
var isTrue = true;
//Classes and Interfaces
//Typescript supports classes and interfaces
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    return person;
}());
var personone = { name: 'john' };
//Infered types
var cars = 'honda'; //automatic string convertion is known as infered type
var numone = 123; //automatic string convertion is known as infered type
//duck type
var complexType = {
    name: 'my name',
    id: 1
};
complexType = {
    id: 4,
    name: 'another name' ////the order change doesnt matter but we leave any key value means its throw error
};
// complexType= {
//     id:5
// }
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greetUser = function () {
        return "welcome ".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return Person;
}(User));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.greetUser = function () {
        return "welcome ".concat(this.firstName, " ").concat(this.lastName, " ,role ").concat(this.role);
    };
    return Admin;
}(Person));
var user1 = new User('anbu', 'liyon', 27);
var admin1 = new Admin('saske', 'uchiha', 17, 'manager');
console.log(user1.greetUser());
console.log(user1.getAge());
console.log(admin1.getAge());
console.log(admin1.greetUser());
//encosullation closure
function counter() {
    var counterValue = 0;
    return {
        increment: function () {
            counterValue++;
        },
        getCounterValue: function () {
            return counterValue;
        }
    };
}
var counterone = counter();
var counterTwo = counter();
counterone.increment();
counterTwo.increment();
counterTwo.increment();
console.log(counterone.getCounterValue());
console.log(counterTwo.getCounterValue());
//access modifier
var Fruits = /** @class */ (function () {
    function Fruits(name, price) {
        this.name = name;
        this.price = price;
    }
    Fruits.prototype.getName = function () {
        return this.name;
    };
    Fruits.prototype.getPrice = function () {
        return this.price;
    };
    Fruits.prototype.setName = function (name) {
        this.name = name;
    };
    return Fruits;
}());
var apple = new Fruits('apple', 200);
console.log(apple.getName());
console.log(apple.getPrice());
apple.setName('orange');
console.log(apple.getName());
//Generic
//t means any
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        this.items.pop();
    };
    Stack.prototype.totalItems = function () {
        return this.items;
    };
    return Stack;
}());
var numberArray = new Stack();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
numberArray.push(4);
console.log(numberArray.totalItems());
numberArray.pop();
console.log(numberArray.totalItems());
var StringArray = new Stack();
StringArray.push('anbu');
StringArray.push('liyon');
StringArray.push('max');
console.log(StringArray.totalItems());
StringArray.pop();
console.log(StringArray.totalItems());
var jsonData = '{"name":"anbu","age":27}';
var newuser = JSON.parse(jsonData); //this compare the given format is matching
console.log("Name ".concat(newuser.name, " age ").concat(newuser.age, " "));
