function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
  
    if (taskInput.value === "") {
      return;
    }
  
    var listItem = document.createElement("li");
    listItem.innerText = taskInput.value;
  
    taskList.appendChild(listItem);
  
    taskInput.value = "";
  }
  