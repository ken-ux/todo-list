const sidebar = document.createElement("div");
sidebar.id = "sidebar";
content.appendChild(sidebar);

const listTitle = document.createElement("h1");
listTitle.textContent = "Lists";
sidebar.appendChild(listTitle);

const sidebarButtons = document.createElement("div");
sidebarButtons.classList = "buttons";
sidebar.appendChild(sidebarButtons);

const addTaskButton = document.createElement("button");
const createListButton = document.createElement("button");
addTaskButton.type = "button";
createListButton.type = "button";
addTaskButton.classList = "add-button";
createListButton.classList = "add-button";
addTaskButton.textContent = "Add Task";
createListButton.textContent = "Create List";
sidebarButtons.appendChild(addTaskButton);
sidebarButtons.appendChild(createListButton);

const sidebarButtons2 = document.createElement("div");
sidebarButtons2.classList = "buttons";
sidebar.appendChild(sidebarButtons2);

// Dynamically add lists here
const list1 = document.createElement("button");
list1.type = "button";
list1.textContent = "List 1";
sidebarButtons2.appendChild(list1);

export default sidebar;