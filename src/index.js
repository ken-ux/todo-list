import "./style.css";
import {
  projects,
  displaySidebarProjects,
  displayProject,
  displayProjectSelect,
} from "./app";

const sidebar = document.querySelector("#sidebar");
const addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add Project";
sidebar.appendChild(addProjectButton);

addProjectButton.addEventListener("click", () => {
  const addProjectDialog = document.querySelector("#add-project");
  addProjectDialog.showModal();
});

const addToDoButton = document.createElement("button");
addToDoButton.textContent = "Add To-Do";
sidebar.appendChild(addToDoButton);

addToDoButton.addEventListener("click", () => {
  displayProjectSelect();
  const addToDoDialog = document.querySelector("#add-todo");
  addToDoDialog.showModal();
});

displaySidebarProjects();

// Only do this on user's first load
displayProject(projects[0]);
