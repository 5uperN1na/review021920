//Function first and declare second.
//End result = Runs as expected.


function greet(name) {
    console.log(`Hello, ${name}`);
}

greet('Eve'); // Hello, Eve


//Decare first and function second.
//End result = Runs as expected. This is because of how context execution works in JavaScript.

greet('Eve'); // Hello, Eve

function greet(name) {
    console.log(`Hello, ${name}`);
}

//The console.log statement will log undefined because the variable is declared and initialized after it is used.
console.log(num); // Returns undefined
var num;
num = 6;

//If you were to declare the variable after it is used, but initialize it beforehand it will work correctly:
num = 6;
console.log(num); // returns 6
var num;

//It will log X with a value of 1 but will show undefined for value of Y (because it is initialized after it is used.)
var x = 1; // Initialize x
console.log(`${x} ${y}`); // 1 undefined
var y = 3; // Initialize y

// The above example is implicitly understood as this:
var x; // Declare x
var y; // Declare y
// End of the hoisting.

x = 1; // Initialize x
console.log(`${x} ${y}`); // 1 undefined
y = 2; // Initialize y


//We are making an assumption that num is a number.
function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);

        return;
    }

    console.log(`${number} is odd`);
}

evenOrOdd(1);

//The function is making an assumption that the value passed to it as an argument has a firstName and lastName property

function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

const john = {
    firstName: 'John',
    lastName: 'Doe',
};

console.log(fullName(john)); // John Doe

//Functions Are Variables

// Will be hoisted
function sayHello() {
    console.log('Hello World!');
}

sayHello();

// Will not be hoisted at all because of the let keyword
let sayHey = function() {
    console.log('Hey World!');
}; // <-- Note the semicolon, because this is a function expression
sayHey();

// Will be hoisted because of the var keyword
var sayHi = function() {
    console.log('Hi World!');
};
sayHi();

//Function Returns

function add(a, b) {
    return a + b;
}

let sum = add(5, 2);

console.log(sum); // 7