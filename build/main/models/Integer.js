"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Integer {
    constructor(number) {
        this.number = number;
    }
    getValue() {
        return this.number;
    }
    isEven() {
        return new Promise((resolve, reject) => {
            if ((this.number % 2) === 0) {
                resolve(`number ${this.number} is even`);
            }
            else {
                reject(`number ${this.number} is odd`);
            }
        });
    }
    isPrime() {
        return new Promise((resolve, reject) => {
            if (this.number > 1) {
                for (let i = 2; i < this.number; i++) {
                    if ((this.number % i) === 0) {
                        reject(`number ${this.number} is composite`);
                    }
                }
                resolve(`number ${this.number} is prime`);
            }
            else {
                reject(`number ${this.number} is composite`);
            }
        });
    }
    isPositive() {
        return new Promise((resolve, reject) => {
            if (this.number >= 0) {
                resolve(`number ${this.number} is positive`);
            }
            else {
                reject(`number ${this.number} is negative`);
            }
        });
    }
}
exports.default = Integer;
