import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: chalk.green("Enter the first number:  ")
    },
    {
        type: 'number',
        name: "num2",
        message: chalk.green("Enter the second number:   "),
    },
    {
        type: "list",
        name: "operator",
        message: chalk.yellow('select the operator you want to perform :  '),
        choices: ["Add", "subtract", "Divide", "Multiply"]
    }
]);
let result;
switch (answer.operator) {
    //  when the user want to use Add operator================================================
    // Multiply operators
    case "Add":
        result = answer.num1 + answer.num2;
        console.log(chalk.yellow("The answer of the addition of "), +result);
        break;
    // when the user want to use Subtract operator================================================
    // Multiply operators
    case "subtract":
        result = answer.num1 - answer.num2;
        if (result <= 0) {
            console.log(chalk.red("Subtraction answer is :"), +result);
        }
        else {
            console.log(chalk.green("Subtraction answer is :"), +result);
        }
        break;
    // when the user want to use Divide operator================================================
    // Multiply operators
    case "Divide":
        result = answer.num1 / answer.num2;
        if (result <= 0) {
            console.log(chalk.red("Answer of divions is :"), +result);
        }
        else {
            console.log(chalk.magenta("Answer of divions is :"), +result);
        }
        break;
    // when the user want to use Multiply operator================================================
    // Multiply operators
    case "Multiply":
        result = answer.num1 * answer.num2;
        if (result > 20 && result <= 50) {
            console.log(chalk.cyanBright("Multiplicative  answer is :"), +result);
        }
        else {
            console.log(chalk.grey("Multiplicative  answer is :"), +result);
        }
        break;
}
