class Integer {
    private number: number;

    public constructor(number: number) {
        this.number = number;
    }

    public getValue(): number {
        return this.number;
    }

    public isEven(): Promise<string> {
        return new Promise((resolve, reject) => {
            if ((this.number % 2) === 0) {
                resolve(`number ${this.number} is even`);
            } else {
                reject(`number ${this.number} is odd`);
            }
        });
    }

    public isPrime(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.number > 1) {
                for (let i: number = 2; i < this.number; i++) {
                    if ((this.number % i) === 0) {
                        reject(`number ${this.number} is composite`);
                    }
                }
                resolve(`number ${this.number} is prime`);
            } else {
                reject(`number ${this.number} is composite`);
            }
        });
    }

    public isPositive(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.number >= 0) {
                resolve(`number ${this.number} is positive`);
            } else {
                reject(`number ${this.number} is negative`);
            }
        });
    }
}

export default Integer;