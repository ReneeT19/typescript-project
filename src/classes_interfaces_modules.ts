/* -------------------------------------- */
// Classes
class Invoice {

    //variables; by default they are public
    client: string;  //you see error if you don't give it a value or if you don't give a constructor (recommended)
    details: string;
    amount: number;

    //constructor
    constructor(c: string, d: string, a: number) {
        this.client = c; //assign values so the errors will be gone
        this.details = d;
        this.amount = a;
    }

    //methods
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
//create new instances of the Invoice object
const invOne = new Invoice('mario', 'work on the mario website', 300);
const invTwo = new Invoice('luigi', 'work on the mario website', 350);
console.log(invOne, invTwo);
//use on array
let invoices: Invoice[] = []; //restrict the type to Invoice: only objects created using this Invoice class can 
// be added to the array invoices
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

invOne.client = 'yoshi'; //because the properties declared are by default public, you can access outside of the class and change the value here
// which is not always good for security concern, so use access modifiers to limit it.


/* -------------------------------------- */
// Access Modifiers - public, private, readonly
//public: access and change it outside or inside the class; 
//private: access and change it inside the class only;
//readonly: access outside and inside the class but can't change it

//if everything is public, you can access every property here in the forEach loop
//if details is private, you can't access it here in the forEach loop
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.details, invoice.amount, invoice.format());
});

//alternative way is to remove the properties but define the modifier in the constructor
class Invoice2 {
    constructor (
        readonly client2: string,
        private details2: string,
        public amount2: number,
    ){}
}

//Module: help code organization; drawbacks: older browser won't work, it doens't compile down to a single file
//use webpack to bundle code into one single file and support all browsers
import { Person } from './classes/Person.js';

const personOne = new Person ('jay', 25, 'accountant');
const personTwo = new Person ('lucy', 40, 'lawyer');

let people: Person[] = [];
people.push(personOne);
people.push(personTwo);

people.forEach(person => {
    console.log(person.name, person.job, person.info());
})


/* -------------------------------------- */
// Interface
// don't use it to create objects; but to enforce certain type of structure within classes or objects
interface IsPerson { //define this interface with properties and methods
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

//an object that is of IsPerson type
const me: IsPerson = { //the structure needs to in compliance with the Interface
    name: 'renee',
    age: 30,
    speak(text: string): void { //if it's void, it doens't need return
        console.log(text);
    },
    spend(amount: number): number { //if it's number, we have to return a number
        console.log(amount);
        return amount;
    }
};

let someone: IsPerson;

//pass object parameter that matches an interface
const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);
}

greetPerson(me);

/* -------------------------------------- */
// Interfaces and Classes
