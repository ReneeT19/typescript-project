/* -------------------------------------- */
// Classes
class Invoice {
    //constructor
    constructor(c, d, a) {
        this.client = c; //assign values so the errors will be gone
        this.details = d;
        this.amount = a;
    }
    //methods
    info() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
//create new instances of the Invoice object
const invOne = new Invoice('mario', 'work on the mario website', 300);
const invTwo = new Invoice('luigi', 'work on the mario website', 350);
console.log(invOne, invTwo);
//use on array
let invoices = []; //restrict the type to Invoice: only objects created using this Invoice class can 
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
    console.log(invoice.client, invoice.details, invoice.amount, invoice.info());
});
//alternative way is to remove the properties but define the modifier in the constructor
class Invoice2 {
    constructor(client2, details2, amount2) {
        this.client2 = client2;
        this.details2 = details2;
        this.amount2 = amount2;
    }
}
//Module: help code organization; drawbacks: older browser won't work, it doens't compile down to a single file
//use webpack to bundle code into one single file and support all browsers
import { Person } from './classes/Person.js';
const personOne = new Person('jay', 'accountant', 25);
const personTwo = new Person('lucy', 'lawyer', 40);
let people = [];
people.push(personOne);
people.push(personTwo);
people.forEach(person => {
    console.log(person.name, person.job, person.info());
});
//an object that is of IsPerson type
const me = {
    name: 'renee',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
let someone;
//pass object parameter that matches an interface
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
/* -------------------------------------- */
// Interfaces and Classes
import { Payment } from './classes/Payment.js';
let docOne;
docOne = new Payment('me', 'work ', 10); //docOne can be a Payment object becuase Payment implements HasFormatter interface
//this way the code is structured better and more secure
let docs = [];
docs.push(docOne); //check the structure of the code 
console.log(docs, docOne.info());
