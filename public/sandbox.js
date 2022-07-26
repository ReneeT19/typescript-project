"use strict";
const character = 'abc';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
/* -------------------------------------- */
//Type Basics
//create variables
let firstName = 'mario';
let age = 30;
let isBlackBelt = false;
//you can change the value of the variable, but not the type
//create functions
//diameter: number restricts the data to be number only
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log("the circ is " + circ(7.5));
/* -------------------------------------- */
//Objects and Arrays
// the type of array is decided when it's first declared and instantiated
let names = ['renee', 'erik', 'soren'];
names.push('toad');
names[0] = 'reneeT';
let numbers = [10, 20, 30, 40];
numbers.push(50);
numbers[1] = 25;
let mixed = ['mario', 4, 'yoshi', 8, 9, true];
mixed.push('luigi');
mixed.push(10);
mixed[0] = 7;
// objects are the same as in JS but strict about the type
// the type is defined in the object and the properties are defined here (you can't add object.skills out of this block)
let object = {
    name: 'mario',
    belt: 'black',
    age: 30
};
object.age = 40;
//update the properties (you have to have the same type and all the properties defined earlier; the value can differ)
object = {
    name: 'test',
    belt: 'test',
    age: 20
};
/* -------------------------------------- */
//Explicit Types
//basic types
let charac; //without giving it a value
let num;
let isLoggedIn;
num = 5;
isLoggedIn = true;
//arrays
let arr; //array of strings
arr = ['abc', 'def'];
let arr1 = []; //initialize an empty array then you can use push method; recommended
arr1.push('mary');
console.log(arr1);
//union types
//union types for arrays
let mixed1 = []; //instead of string[] we do () with pipe |
mixed1.push('hello');
mixed1.push(20);
mixed1.push(false);
console.log(mixed1);
//use union types for normal variables
let uid;
uid = '123';
uid = 123;
//objects
let object1; //you can also define object1 as an array because array is kind of an object;
//but you can be specific like object2 explicitely
object1 = {
    name: 'barbie',
    age: 3
};
let object2;
object2 = {
    name: 'd',
    age: 10
};
/* -------------------------------------- */
//Dynamic(any) Types - be careful using any
//basic types
let age1 = 25; //=25 is optional, you can just give it an any type without the value
age1 = 'hello'; //you can change the age1 type to string, object, or boolean
age1 = true;
age1 = {
    name: 'test',
    age: 30
};
//arrays
let mixed2 = [];
mixed2.push(2);
mixed2.push('a');
mixed2.push(false);
//objects
let object3;
object3 = {
    name: 'h',
    age: 35
};
/* -------------------------------------- */
//Better Workflow and tsconfig
//see notebook
