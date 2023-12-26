import "./style.css";
import { ToDoItem, ToDoProject } from "./appLogic";

const toDoProjects = [];
toDoProjects.push(new ToDoProject("default"));
toDoProjects.push(new ToDoProject("default_2"));
toDoProjects.push(new ToDoProject("default_3"));

const sidebar = document.querySelector("#sidebar");
for (let i = 0; i < toDoProjects.length; i++) {
  const project = document.createElement("div");
  project.textContent = toDoProjects[i].name;
  sidebar.appendChild(project);
}

const main = document.querySelector("main");
let projectName = document.createElement("h1");
projectName.textContent = toDoProjects[0].name;
main.appendChild(projectName);