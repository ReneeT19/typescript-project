//use interface with class; make sure `implements HasFormatter`
import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
    constructor (
        readonly recipient: string,
        public details: string,
        public amount: number
    ){}

    info() {
        return `${this.recipient} received $${this.details} for ${this.amount}`;
    }
}