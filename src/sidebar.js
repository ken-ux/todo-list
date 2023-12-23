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

export default function (lists) {
  for (let i = 0; i < lists.length; i++) {
    let list = document.createElement("button");
    list.type = "button";
    list.textContent = lists[i].name;
    sidebarButtons2.appendChild(list);
  }

  return sidebar;
}
