import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";

let toDoLists = [];

export function intializeLists() {
  if (localStorage.getItem("storedLists")) {
    toDoLists = JSON.parse(localStorage.getItem("storedLists"));
    for (let i = 0; i < toDoLists.length; i++) {
      Object.setPrototypeOf(toDoLists[i], ToDoList.prototype);
    }
  } else {
    let item = new ToDoItem(
      "Your first to-do item!",
      "This is a description of what you need to do.",
      new Date(2025, 1, 11),
      "high"
    );

    let list = new ToDoList("Default List");
    list.addToList(item);
    toDoLists.push(list);
    localStorage.setItem("storedLists", JSON.stringify(toDoLists));
  }
  return toDoLists;
}