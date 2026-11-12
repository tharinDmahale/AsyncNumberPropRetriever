import Integer from "./models/Integer";

class Main {
    private constructor() {}

    public static async main(args: string[]): Promise<void> {
        console.info("Main started...\n");
        console.info(`Arguments: ${args}\n`);
        if ((args.length > 0) && (args.length < 3)) {
            const number: number = Number(args[0]);
            if (number) {
                const integer: Integer = new Integer(number);
                const results: PromiseSettledResult<string>[] = await Promise.allSettled([
                    integer.isEven(),
                    integer.isPrime(),
                    integer.isPositive(),
                ]);
                console.info("Results:");
                console.info(results);
            } else {
                console.error(`Error: number is ${number}!`);
            }
        } else {
            console.error(`Error: invalid number of arguments!`);
        }
        console.info("\nMain ended...");
    }
}

export default Main;