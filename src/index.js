import "./style.css";
import { projects, displaySidebarProjects, displayProject } from "./app";

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
