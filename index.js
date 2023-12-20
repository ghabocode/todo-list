function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    // Create a new list item
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a delete button and append it to the list item
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }
}
