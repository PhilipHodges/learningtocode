// ----- Teaching Phil to Code (with beans) - Intro to Programming Fundamentals ----- //



// Data Types
"Hello"; // String 
12; // number
["hello", "world"]; // array
true; // Bool

// Variable Bindings (const, let, var)
// let
// let name = "Phil";
let age = 18;
let color = "beans";
// const
const first_name = "Adam";

// Values - Operators (Artithmetic and Logical) - Booleans
// + == - > <
// Divide -> /
// Multiply -> *
// Modulus -> % 








let green = 50;
let red = 20;
let white = 35 - 5;
let add = green * red / white;
let purple = 100 / 3;

// console.log(purple);

// Booleans
// true or false
let lie = true;
let adam = "Adam";

let moneyOwed = 100;
let moneyPaid = 110;

let paidInFull = true;

// console.log(paidInFull);

if(moneyOwed > moneyPaid || moneyOwed < moneyPaid) {
    paidInFull = false;

} else {
    paidInFull = true;
}

let beans = undefined
// console.log(paidInFull);


// Logical
// and -> && 
// or -> ||


// const name = prompt('whats your name')

// console.log(`no beans for you, ${name}`)

// Template literals


// --- Functions ---
// Some built in functions * Math.max/min() * prompt() * Number()
function addTwoNumbers(a, b) {
    return a + b;
};

function multiplyTwoNumbers(a, b) {
    return a * b;
}

multiplyTwoNumbers(9, 10);
// console.log(multiplyTwoNumbers(9, 10));


function divideTwoNumbers(a, b){
    return (`${a / b} - ${multiplyTwoNumbers(a, b)}`);
}

// console.log(divideTwoNumbers(2, 10));

let notANumber = "3000";
let nowANumber = Number(notANumber);


// console.log(addTwoNumbers(5, 10));
// console.log(addTwoNumbers(5, 20));
// console.log(addTwoNumbers(5, 1000));
// console.log(addTwoNumbers(89, 10));




//poopchunk beetle
// Loops (for, while, forEach)

// let medicine = ["pain pills", "gas X", "Heroine", "pain pills", "gas X", "Heroine"];
// medicine.forEach((med, index) => {
//     console.log(med, index);
// });

function mod(number) {
    switch(number % 2) {
        case 0:
            return "even";
        case 1:
            return "odd";
    };
};



console.log(mod(459879));

