"use strict";
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
    format() {
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
