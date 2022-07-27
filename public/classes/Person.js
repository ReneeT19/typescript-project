//use Module (change tsconfig.json to "module": "ES2015")
export class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    info() {
        return `${this.name} is $${this.age} years old and is a ${this.job}`;
    }
}
