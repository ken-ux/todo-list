export class Project {
  constructor(name) {
    this.name = name;
    this.items = new Array();
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value === "") {
      throw new TypeError("Name cannot be empty.");
    } else {
      this._name = value;
    }
  }

  addToProject(item) {
    this.items.push(item);
  }

  removeFromProject(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

export class ToDo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value === "") {
      throw new TypeError("Name cannot be empty.");
    } else {
      this._name = value;
    }
  }

  toggleComplete() {
    this.complete = !this.complete;
  }
}

export function saveToStorage(projects) {
  localStorage.setItem("projects", projects);
}

export function loadStorage() {
  return localStorage.getItem("projects");
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
  }
}