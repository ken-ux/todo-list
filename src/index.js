import "./style.css";
import createSidebar from "./sidebar";
import displayList from "./ListItems";
import { newItemModal, newListModal } from "./AddModals";
import { intializeLists } from "./storageFuncs"

let toDoLists = intializeLists();

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
