let todo = [];
let req = prompt("Please enter your request");

while (true) {
    if (req === "quit") {
        console.log("Quitting app...");
        break;
    }

    if (req === "list") {
        console.log("------ To-Do List ------");
        if (todo.length === 0) {
            console.log("No tasks available");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(i, todo[i]);
            }
        }
        console.log("------------------------");
    } 
    else if (req === "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log(`Task "${task}" added`);
    } 
    else if (req === "delete") {
        let idx = parseInt(prompt("Please enter the task index")); // Convert to integer
        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            let deletedTask = todo.splice(idx, 1); // Removes the selected task
            console.log(`Task "${deletedTask}" deleted`);
        } else {
            console.log("Invalid index. Please enter a valid number.");
        }
    } 
    else {
        console.log("Wrong request. Please enter 'add', 'list', 'delete', or 'quit'.");
    }

    req = prompt("Please enter your request"); // Ask again for input
}