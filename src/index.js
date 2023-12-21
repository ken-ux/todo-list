import "./style.css";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";

let testItem1 = new ToDoItem("task_1", "task_desc", "date", "high");
let testItem2 = new ToDoItem("task_2", "task_desc", "date", "high");
let testItem3 = new ToDoItem("task_1", "task_desc", "date", "high");

let list = new ToDoList();

list.addToList(testItem1);
list.addToList(testItem2);
list.addToList(testItem3);

list.removeFromList(testItem2);
console.log(list.items);