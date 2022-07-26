//use Module (change tsconfig.json to "module": "ES2015")
export class Person {
    constructor (
        readonly name: string,
        private age: number,
        public job: string,
    ){}

    info() {
        return `${this.name} is $${this.age} years old and is a ${this.job}`;
    }
}