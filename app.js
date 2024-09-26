const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("task");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${task}
    <button class="deleteBtn">Delete</button>
  `;

  // Event Listener for marking the task as complete
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  // Delete Task Functionality
  listItem.querySelector(".deleteBtn").addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent marking as complete on delete
    listItem.remove();
  });

  todoList.appendChild(listItem);
  taskInput.value = "";
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("Service Worker Registered");
    })
    .catch((error) => {
      console.log("Service Worker Registration Failed", error);
    });
}
