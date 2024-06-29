import inquirer from "inquirer";
async function toDoList() {
    let { list } = await inquirer.prompt([{
            name: 'list',
            message: 'Enter Text',
            type: 'string',
        }]);
    console.log('You Entered: ' + list);
    let { change } = await inquirer.prompt([{
            name: 'change',
            message: 'Do you want to CREATE,READ,UPDATE or DELETE?',
            choices: ['To Create New List Press C', 'To Just Read Press R', 'To Update Press U', 'To Delete Press D'],
            type: 'list',
        }]);
    if (change === 'To Create New List Press C') {
        toDoList();
    }
    else if (change === 'To Just Read Press R') {
        console.log(list);
        anotherList();
    }
    else if (change === 'To Update Press U') {
        let { add } = await inquirer.prompt([{
                name: 'add',
                message: 'Enter Text',
                type: 'string',
            }]);
        console.log(list + '\n' + add);
        anotherList();
    }
    else if (change === 'To Delete Press D') {
        list = null;
        console.log('Deleted Sucessfully');
        anotherList();
    }
    else {
        console.log('Invalid Input');
    }
}
async function anotherList() {
    let { anotherL } = await inquirer.prompt([{
            name: 'anotherL',
            message: 'Do you want another list',
            type: 'confirm',
        }]);
    if (anotherL) {
        toDoList();
    }
    else {
        console.log('Thank you!!!');
    }
}
toDoList();
