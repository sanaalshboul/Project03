
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks =0;
 
function updateCounter() {
    taskCount.textContent = totalTasks; 
}

function addTask(){
    const taskText = taskInput.value.trim();

    // Empty task check
    if(taskText === "")
    {
        alert("Please enter a task!");
        return;

    }

    //Create element (list item)
    const li= document.createElement("li");

    // Create the task text element
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // Mark the task as completed when clicked
    span.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    // Create the Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent ="Delete";
    deleteButton.classList.add("delete-button");


    // Delete the task
    deleteButton.addEventListener("click",  function(){
        li.remove();
        totalTasks--;
        updateCounter();
    })

    // Assemble the task
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);


    // update the counter and delete input
    totalTasks++;
    updateCounter();
    taskInput.value="";
    taskInput.focus();

}



// Add task using the button
addButton.addEventListener("click", addTask);

// Add task by pressing Enter
taskInput.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    {
        addTask();
    }
})