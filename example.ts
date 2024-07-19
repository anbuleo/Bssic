/*Strong type 

we must decalare and assign the what type of data can be stores in the variable*/


let value : string = "This is String";

value = '1';

console.log(value)

// value = function (1,2){return `${1+2}`}


/** data types in typeScript same as javaScript primitive and Non-primitive
 */

let myString:string = 'I am a string value'; 
let myNumber: number = 123;
let  myBoolean: boolean = true;
let myNull: null = null;
let myUndefined: undefined = undefined;
// let myBigint: bigint = 1000n;
// let mySymbol : symbol = Symbol("unique");


//function

let add:(a:number,b:number)=> number = (x,y)=>x+y
console.log(add(1,2))

//Special Types


//Any: Represents any type. Useful for gradual migration
let anything: any = 'could be any thng '; 

//Unknown : similar to 'any' but safer type assertions or checks are requried before use 
let notsure: unknown = 4;

//void: Represents thr absence of any type, commonly used as the return type of functions that do not return value

// function logMessage(): void {console.log('hello world')};

//Never : represents the type of the values that never occur, used for functions that throw an error or have infinte loops,

// function error(message: string): never {
//     throw new Error(message)
// }

//Object types 

//Object: Represents non-primitive types 

let obj:object = {name:'anbu'}


// TypeScript-specific Types


// Tuple 
// Tuple: represents a fixed length array with specified dtypes for each element

let tuple:[string, number] = ['hello',2];


//Enum 

//Enum : rRepresent a set of named constants 

// enum Colors {
//     Red,
//     Green,
//     Blue,
// }

enum Directions{
    Up,
    Down,
    Left,
    Right
}

function moves(direction){
    console.log(`${Directions[direction].toLowerCase()}`)
}
moves(Directions.Left)
// let c:Colors = Colors.Blue;

//Array

//Array : Respresents a collection of values of a specific type.

let list : number[]= [1,2,3,4,5,6,7];

//Union 
//Union : Represents a value that can be one of several types

let valuea: string | number = 'anbu';

// Intersection 

//Intersection: Combines multiple types into one,

interface A {a:string};
interface B {b:number};

let combined: A & B = { a:'hello',b:42}


//Type aliases

//TypeScript allows you to create custom types using  type aliases

type StringNumber = string | number;

let valueb : StringNumber = 123;

//Literal Types

//String Literals: Specific string values 

// let direction : 'up' | 'down' = "up";

//Numeric Literals : specific numeric values ;

let one :1 = 1;

//Boolean Literals : 'true' or 'false'

let isTrue :true = true;

//Classes and Interfaces

//Typescript supports classes and interfaces

class person {
    name: string;
    constructor(name:string){
        this.name = name
    }
}
interface Iperson {
    name: string

}
let personone :Iperson = {name:'john'}


 

//Infered types

let cars = 'honda'   //automatic string convertion is known as infered type
let numone = 123 //automatic string convertion is known as infered type


//duck type

let complexType = {
    name: 'my name',
    id:1
}
complexType = {
    id:4, 
    name:'another name'           ////the order change doesnt matter but we leave any key value means its throw error
}

// complexType= {
//     id:5
// }
 
class User {
    firstName: string;
    lastName: string;
    age:number;
    constructor(firstName:string,lastName:string,age:number){
        this.firstName = firstName;
        this.lastName= lastName;
        this.age = age;
    }
    greetUser(){
        return `welcome ${this.firstName} ${this.lastName}`
    }
    getAge(){
        return this.age
    }
} 


class Person extends User {
    constructor(firstName:string,lastName:string,age:number){
        super(firstName,lastName,age)
    }
}

class Admin extends Person {
    role: string;
    constructor(firstName:string,lastName:string,age:number,role:string){
        super(firstName,lastName,age)
        this.role=role;
    }

    greetUser(): string {
         return `welcome ${this.firstName} ${this.lastName} ,role ${this.role}`
    }
}

const user1 = new User('anbu','liyon',27);
const admin1 = new Admin('saske','uchiha',17,'manager')

console.log(user1.greetUser())
console.log(user1.getAge())
console.log(admin1.getAge())
console.log(admin1.greetUser())


//encosullation closure

function counter(){
    let counterValue = 0;

    return {
        increment : function(){
            counterValue ++;
        },
        getCounterValue: ()=>{
            return counterValue
        }
    }
}

let counterone = counter()
let counterTwo = counter()

counterone.increment()
counterTwo.increment()
counterTwo.increment()

console.log(counterone.getCounterValue())
console.log(counterTwo.getCounterValue())

//access modifier


class Fruits{
    private name : string;
    private price: number;
    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    }

    public getName (){
        return this.name
    }
    public getPrice (){
        return this.price
    }

    public setName(name:string){
        this.name=name;
    }

}

let apple = new Fruits('apple',200)

console.log(apple.getName())
console.log(apple.getPrice())
apple.setName('orange')
console.log(apple.getName())


//Generic

//t means any

class Stack<T>{
    private items:T[] = []

    push(item: T){
        this.items.push(item)
    }
    pop(){
        this.items.pop()
    }
    public totalItems(){
        return this.items
    }

}

const numberArray = new Stack<number>();

numberArray.push(1)
numberArray.push(2)
numberArray.push(3)
numberArray.push(4)

console.log(numberArray.totalItems())

numberArray.pop()
console.log(numberArray.totalItems())

const StringArray = new Stack<string>()

StringArray.push('anbu')
StringArray.push('liyon')
StringArray.push('max')
console.log(StringArray.totalItems())
StringArray.pop()
console.log(StringArray.totalItems())


//type casting 

//interface

interface Formating {
    name: string;
    age: number;

}

const jsonData = '{"name":"anbu","age":27}'

const newuser  = JSON.parse(jsonData) as Formating //this compare the given format is matching

console.log(`Name ${newuser.name} age ${newuser.age} `)