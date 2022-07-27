export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    info() {
        return `${this.recipient} received $${this.details} for ${this.amount}`;
    }
}
