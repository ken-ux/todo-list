import Project from "./project";
import ToDo from "./toDo";

export const projects = [];
projects.push(new Project("default"));
projects.push(new Project("default_2"));
projects.push(new Project("default_3"));

projects[0].addToProject(new ToDo("todo", "desc", "date", "priority"));
projects[0].addToProject(new ToDo("todo_2", "desc", "date", "priority"));
projects[0].addToProject(new ToDo("todo_3", "desc", "date", "priority"));
projects[1].addToProject(new ToDo("todo", "desc", "date", "priority"));
projects[1].addToProject(new ToDo("todo_2", "desc", "date", "priority"));
projects[2].addToProject(new ToDo("todo", "desc", "date", "priority"));

export function saveToStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadStorage() {
  return JSON.parse(localStorage.getItem("projects"));
}

const sidebarProjects = document.querySelector("#projects");

export function displaySidebarProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    const project = document.createElement("div");
    project.textContent = projects[i].name;
    project.addEventListener("click", () => displayProject(projects[i]));
    sidebarProjects.appendChild(project);
  }
}

const main = document.querySelector("main");
const projectItems = document.querySelector("#project-items");
const projectName = document.createElement("h1");
main.prepend(projectName);

export function displayProject(project) {
  while (projectItems.hasChildNodes()) {
    projectItems.removeChild(projectItems.firstChild);
  }
  // Display title
  projectName.textContent = project.name;

  // Display to-dos
  for (let i = 0; i < project.items.length; i++) {
    const item = document.createElement("div");
    item.textContent = project.items[i].name;
    projectItems.appendChild(item);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () =>
      console.log("Edit details here")
    );
    projectItems.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      project.removeFromProject(project.items[i]);
      displayProject(project);
    });
    projectItems.appendChild(deleteButton);
  }
}
