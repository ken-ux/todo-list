import "./style.css";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
import createSidebar from "./sidebar";
import displayList from "./ListItems";
import { newItemModal, newListModal } from "./AddModals";

let toDoLists = [];

if (localStorage.getItem("storedLists")) {
  toDoLists = localStorage.getItem("storedLists");
} else {
  let testItem1 = new ToDoItem(
    "Your first to-do item!",
    "This is a description of what you need to do.",
    new Date(2025, 1, 11),
    "high"
  );

  let list = new ToDoList("Default List");
  list.addToList(testItem1);
  toDoLists.push(list);
}

const content = document.querySelector("#content");
content.appendChild(createSidebar(toDoLists));
displayList(toDoLists[0]);

const addTaskButton = document.querySelector(".add-button.add-task");
addTaskButton.addEventListener("click", () => {
  if (document.querySelector("dialog")) {
    content.removeChild(document.querySelector("dialog"));
  }
  content.appendChild(newItemModal(toDoLists));
});

const newListButton = document.querySelector(".add-button.create-list");
newListButton.addEventListener("click", () => {
  if (document.querySelector("dialog")) {
    content.removeChild(document.querySelector("dialog"));
  }
  content.appendChild(newListModal(toDoLists));
});
