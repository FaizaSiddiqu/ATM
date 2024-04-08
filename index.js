#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; // Dollar
let myPin = 4444;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
// 1234
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    // if user select withdraw option
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`your ramianing balance is:${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is:${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fastCash",
                message: "select your amount",
                type: "list",
                choices: ["500", "1000", "2000", "5000"]
            }
        ]);
        myBalance -= fastCash.fastCash;
        console.log(`your ramianing balance is:${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
;
