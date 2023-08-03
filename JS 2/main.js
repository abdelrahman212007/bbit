let form = document.querySelector("form");
let input = document.querySelector("input");
let tasksEmptyDiv = document.querySelector(".tasks-empty");
let list = document.querySelector(".list");

tasksEmpty();

form.onsubmit = newTask;


function newTask(e){

    e.preventDefault()

    if(input.value === "") {
        return false
    } 
    else {
        let listItem = document.createElement("li");
        listItem.classList.add(".list-item");
        listItem.innerHTML = `
            <span class="task">${input.value}</span>
            <span class="del"></span>
        `
        list.appendChild(listItem);
        input.value = ""
        tasksEmpty() 
        
    }
}

function tasksEmpty() {
    if (list.children.length === 0) {
        tasksEmptyDiv.innerHTML = "Tasks Empty"
    } else {
        tasksEmptyDiv.innerHTML = ""
    }
}