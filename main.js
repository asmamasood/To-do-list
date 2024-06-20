import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.redBright.bold("wellcome to TODO list"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "List",
            message: "Do you want to enter new task?"
        }
    ]);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "False"
        }
    ]);
    todos.push(addTask.todo);
    condition = addMoreTask.addMore;
    console.log("your updated Todo list successfully");
    console.log(todos);
}
