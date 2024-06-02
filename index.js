#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let C_value = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1,
    INR: 3.33,
    Chinese_Yuan: 38.47,
    Egyptian_Pound: 5.87,
    Euro: 299.40,
    Turkish_Lira: 8.59
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "\nConverting From\n",
        choices: ["PKR", "UAE", "USD", "INR", "Chinese_Yuan", "Egyptian_Pound", "Euro", "Turkish_Lira"]
    },
    {
        type: "list",
        name: "to",
        message: "\nConverting to\n",
        choices: ["PKR", "UAE", "USD", "INR", "Chinese_Yuan", "Egyptian_Pound", "Euro", "Turkish_Lira"]
    },
    {
        type: "number",
        name: "amount",
        message: "\nYour amount to convert\n"
    }
]);
console.log(chalk.bgGray.bold(C_value[ans.to] / C_value[ans.from] * ans.amount));
