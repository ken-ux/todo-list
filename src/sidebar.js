import displayList from "./ListItems";

export default function createSidebar(lists) {
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
  addTaskButton.type = "button";
  addTaskButton.classList = "add-button add-task";
  addTaskButton.textContent = "Add Task";
  sidebarButtons.appendChild(addTaskButton);

  const createListButton = document.createElement("button");
  createListButton.type = "button";
  createListButton.classList = "add-button create-list";
  createListButton.textContent = "Create List";
  sidebarButtons.appendChild(createListButton);

  const sidebarButtons2 = document.createElement("div");
  sidebarButtons2.classList = "buttons list";
  sidebar.appendChild(sidebarButtons2);

  for (let i = 0; i < lists.length; i++) {
    let list = document.createElement("button");
    list.type = "button";
    list.textContent = lists[i].name;
    list.addEventListener("click", () => displayList(lists[i]));
    sidebarButtons2.appendChild(list);
  }

  return sidebar;
}

export function refreshSidebar(lists) {
  const sidebar = document.querySelector("#sidebar");

  const oldListButtons = document.querySelector(".buttons.list");
  const updatedListButtons = document.createElement("div");
  updatedListButtons.classList = "buttons list";
  sidebar.replaceChild(updatedListButtons, oldListButtons);

  for (let i = 0; i < lists.length; i++) {
    let list = document.createElement("button");
    list.type = "button";
    list.textContent = lists[i].name;
    list.addEventListener("click", () => displayList(lists[i]));
    updatedListButtons.appendChild(list);
  }
}
