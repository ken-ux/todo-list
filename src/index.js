import "./style.css";
import {
  ToDo,
  Project,
  displaySidebarProjects,
  displayProject,
} from "./appLogic";

const projects = [];
projects.push(new Project("default"));
projects.push(new Project("default_2"));
projects.push(new Project("default_3"));

projects[0].addToProject(new ToDo("todo", "desc", "date", "priority"));
projects[0].addToProject(new ToDo("todo_2", "desc", "date", "priority"));
projects[0].addToProject(new ToDo("todo_3", "desc", "date", "priority"));

projects[1].addToProject(new ToDo("todo", "desc", "date", "priority"));
projects[1].addToProject(new ToDo("todo_2", "desc", "date", "priority"));

projects[2].addToProject(new ToDo("todo", "desc", "date", "priority"));

const sidebar = document.querySelector("#sidebar");
const addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add Project";
sidebar.appendChild(addProjectButton);

displaySidebarProjects(projects);

const main = document.querySelector("main");

displayProject(projects[0]);

const addToDoButton = document.createElement("button");
addToDoButton.textContent = "Add To-Do";
main.appendChild(addToDoButton);
