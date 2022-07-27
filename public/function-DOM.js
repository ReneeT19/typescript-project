/* -------------------------------------- */
//Function Basics 
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { Person } from "./classes/Person.js";
//declared greet as a type function
let greet = () => {
    console.log('hello');
};
//or just explicitely declare it as a Function and instantiate later
let greet1;
greet1 = () => {
    console.log('implement the function');
};
//restrict the type of parameters
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10);
//pass optional parameters using ?
const add1 = (a, b, c) => {
    console.log(a + b);
    console.log(c); //undefined
};
add1(5, 10);
//give a default value if no data is passed; the optional param should go to the end
const add2 = (a, b, c = 10) => {
    //hover over the function, it returns void type by default
    console.log(a + b);
    console.log(c); //10 if not given in the function callback
};
add1(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7); //the result variable will become the type of the returned value above
// you can explicitly give it a type const minus ...: number => {}
//pass object as a parameter
const greet2 = (user) => {
    console.log(`${user.name} says hello`);
};
greet2({ name: 'abc' });
const function1 = (uid) => { };
const function2 = (user) => { };
/* -------------------------------------- */
// Function Signatures: args it takes and data it returns
let func1; //func1 can hold a function that follows this signature
func1 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
func1('abc', 'hi');
let func2;
func2 = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else { //this else block is necessary because it needs to return a number
        return numOne - numTwo;
    }
};
let func3;
func3 = (func3Object) => {
    console.log(`${func3Object.name} is ${func3Object.age} years old`);
};
func3({ name: 'abc', age: 27 });
/* -------------------------------------- */
// The DOM and Type Casting
//same query methods as in JS; few key differences
const anchor = document.querySelector('a'); //there is one a in the html file; add ! to access the anchor.properties
console.log(anchor.href);
const form = document.querySelector('form'); //hover over form you will see the type
const form1 = document.querySelector('.new-item-form'); //type became Element instead of HTMLFormElement when using class
const form2 = document.querySelector('.new-item-form'); //casting Element to HTMLFormElement
console.log(form2.children); //you can find tons of properties for form2
//inputs
const input = document.querySelector('#type'); //use element id from html; because it's a dropdown select field
const input1 = document.querySelector('#tofrom'); //it's a input field
const input2 = document.querySelector('#details');
const input3 = document.querySelector('#amount');
//grab the value and console log them using EventListener
form2.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent the page from refreshing
    //tuple
    let values;
    values = [input1.value, input2.value, input3.valueAsNumber];
    console.log(input.value, input1.value, input2.value, input3.valueAsNumber //the input is number but the returned value is string, so change it to valueAsNumber
    );
    //use Interface to create objects that grab the input values when the use submits the form
    let doc;
    if (input.value === 'payment') {
        doc = new Payment(input1.value, input2.value, input3.valueAsNumber);
    }
    else {
        doc = new Person(...values); //use tuple defined above here to avoid repeating code
    }
    console.log(doc, doc.info());
    /* -------------------------------------- */
    // Rendering a HTML template; the style comes from style.css
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    list.render(doc, input.value, 'end');
});
