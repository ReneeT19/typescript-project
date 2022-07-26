//use Module (change tsconfig.json to "module": "ES2015")
export class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    info() {
        return `${this.name} is $${this.age} years old and is a ${this.job}`;
    }
}
