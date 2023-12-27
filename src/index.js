import "./style.css";
import { projects, displaySidebarProjects, displayProject } from "./app";

const sidebar = document.querySelector("#sidebar");
const addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add Project";
addProjectButton.addEventListener("click", () => {
  const addProjectDialog = document.querySelector("#add-project");
  addProjectDialog.showModal();
});
sidebar.appendChild(addProjectButton);

displaySidebarProjects(projects);

const main = document.querySelector("main");

// Only do this on user's first load
displayProject(projects[0]);

const addToDoButton = document.createElement("button");
addToDoButton.textContent = "Add To-Do";
main.appendChild(addToDoButton);
