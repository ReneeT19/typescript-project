//use interface with class; make sure `implements HasFormatter`
import { HasFormatter } from "../interfaces/HasFormatter.js";


//use Module (change tsconfig.json to "module": "ES2015")
export class Person implements HasFormatter {
    constructor (
        readonly name: string,
        public job: string,
        public age: number
    ){}

    info() {
        return `${this.name} is $${this.age} years old and is a ${this.job}`;
    }
}