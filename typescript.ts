let message : string  = "hello typescript"
console.log(message);


//string
let firstName : string = "Marc"
let greetings : string = `hello ${firstName}`;


//numbers
let age : Number = 8;
console.log(age);

//boolean
let isActive : Boolean = true;
let hasPermission : boolean = false;

//array
let numbers : number[] = [1,2,3];
let names : string[] = ["joe", "marc", "onana"];


//any
//it bypass type checking for variables

let types : any = [1,2,3];
types = "hello there";
types = false;

//void used for functios that return no value
function sayHello() : void {
    console.log("hello");
    
};

// null & undefined These are distinct types in TypeScript, just like in JavaScript. They represent the absence of a value.
let n = null;
let u = undefined;

let userName = "";
userName = "david"
// userName = 123