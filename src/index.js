import "./style.css";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
import sidebar from "./sidebar";
import displayList from "./ListItems";
import { newItemModal } from "./AddModals";

let toDoLists = [];

let testItem1 = new ToDoItem(
  "task_1",
  "task_desc",
  new Date(2014, 1, 11),
  "high"
);
let testItem2 = new ToDoItem(
  "task_2",
  "task_desc",
  new Date(2014, 1, 11),
  "medium"
);
let testItem3 = new ToDoItem(
  "task_3",
  "task_desc",
  new Date(2014, 1, 11),
  "low"
);

let list = new ToDoList("Default List");
list.addToList(testItem1);
list.addToList(testItem2);
list.addToList(testItem3);
toDoLists.push(list);

// Remove these lines later
let list_2 = new ToDoList("Default List 2");
list_2.addToList(testItem3);
toDoLists.push(list_2);

const content = document.querySelector("#content");
content.appendChild(sidebar(toDoLists));
displayList(list);

const addTaskButton = document.querySelector(".add-button.add-task");
addTaskButton.addEventListener("click", () => {
  if (document.querySelector("dialog")) {
    content.removeChild(document.querySelector("dialog"));
  }
  content.appendChild(newItemModal(toDoLists));
});
