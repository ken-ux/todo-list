import "./style.css";
import { ToDo, Project } from "./appLogic";

const projects = [];
projects.push(new Project("default"));
projects.push(new Project("default_2"));
projects.push(new Project("default_3"));

projects[0].addToProject(new ToDo("todo", "desc", "date", "priority"));
projects[0].addToProject(new ToDo("todo_2", "desc", "date", "priority"));
projects[0].addToProject(new ToDo("todo_3", "desc", "date", "priority"));

const sidebar = document.querySelector("#sidebar");
for (let i = 0; i < projects.length; i++) {
  const project = document.createElement("div");
  project.textContent = projects[i].name;
  sidebar.appendChild(project);
}

const addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add Project";
sidebar.appendChild(addProjectButton);

const main = document.querySelector("main");
const projectName = document.createElement("h1");
projectName.textContent = projects[0].name;
main.prepend(projectName);

const projectItems = document.querySelector("#project-items");
for (let i = 0; i < projects[0].items.length; i++) {
  const item = document.createElement("div");
  item.textContent = projects[0].items[i].name;
  projectItems.appendChild(item);
}

const addToDoButton = document.createElement("button");
addToDoButton.textContent = "Add To-Do";
projectItems.appendChild(addToDoButton);