import "./style.css";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
import sidebar from "./sidebar";
import createListItems from "./ListItems";

const content = document.querySelector("#content");
content.appendChild(sidebar);

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
  "high"
);
let testItem3 = new ToDoItem(
  "task_3",
  "task_desc",
  new Date(2014, 1, 11),
  "high"
);

let list = new ToDoList("example");

list.addToList(testItem1);
list.addToList(testItem2);
list.addToList(testItem3);

console.log(list);
console.log(list.items);


content.appendChild(createListItems(list));