"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Integer_1 = __importDefault(require("./models/Integer"));
class Main {
    constructor() { }
    static async main(args) {
        console.info("Main started...\n");
        console.info(`Arguments: ${args}\n`);
        if ((args.length > 0) && (args.length < 3)) {
            const number = Number(args[0]);
            if (number) {
                const integer = new Integer_1.default(number);
                const results = await Promise.allSettled([
                    integer.isEven(),
                    integer.isPrime(),
                    integer.isPositive(),
                ]);
                console.info("Results:");
                console.info(results);
            }
            else {
                console.error(`Error: number is ${number}!`);
            }
        }
        else {
            console.error(`Error: invalid number of arguments!`);
        }
        console.info("\nMain ended...");
    }
}
exports.default = Main;
