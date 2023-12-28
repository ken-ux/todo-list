import Project from "./project";
import ToDo from "./toDo";

export const projects = [];

// localStorage.clear();
if (localStorage.getItem("projects")) {
  // Load existing projects
  const storedProjects = loadStorage();

  for (let i = 0; i < storedProjects.length; i++) {
    const project = new Project(storedProjects[i].name);

    // Add stored todos to each stored project
    for (let j = 0; j < storedProjects[i].items.length; j++) {
      const details = storedProjects[i].items[j];
      const todo = new ToDo(
        details.name,
        details.description,
        details.dueDate,
        details.priority
      );
      project.addToProject(todo);
    }
    projects.push(project);
  }
} else {
  // Initialize default projects
  projects.push(new Project("default"));
  projects.push(new Project("default_2"));
  projects.push(new Project("default_3"));

  projects[0].addToProject(new ToDo("todo", "desc", "date", "priority"));
  projects[0].addToProject(new ToDo("todo_2", "desc", "date", "priority"));
  projects[0].addToProject(new ToDo("todo_3", "desc", "date", "priority"));
  projects[1].addToProject(new ToDo("todo", "desc", "date", "priority"));
  projects[1].addToProject(new ToDo("todo_2", "desc", "date", "priority"));
  projects[2].addToProject(new ToDo("todo", "desc", "date", "priority"));
  saveToStorage();
}

export function saveToStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadStorage() {
  return JSON.parse(localStorage.getItem("projects"));
}

const sidebarProjects = document.querySelector("#projects");

export function displaySidebarProjects() {
  while (sidebarProjects.hasChildNodes()) {
    sidebarProjects.removeChild(sidebarProjects.firstChild);
  }
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

  // Remove delete project button when switching projects
  if (document.querySelector(".delete-project-button")) {
    main.removeChild(document.querySelector(".delete-project-button"));
  }

  // Display delete project button
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList = "delete-project-button";
  deleteProjectButton.textContent = "Delete List";
  main.insertBefore(deleteProjectButton, projectItems);
  deleteProjectButton.addEventListener("click", () => {
    removeFromProjects(project);
    displaySidebarProjects();
  });

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

const addProjectForm = document.querySelector("dialog#add-project > form");
addProjectForm.addEventListener("submit", () => {
  const formData = new FormData(addProjectForm);
  let name = formData.get("name");
  projects.push(new Project(name));
  displaySidebarProjects(projects);
});

const cancelProjectButton = document.querySelector(
  "dialog#add-project .cancel-button"
);
cancelProjectButton.addEventListener("click", () => {
  const addProjectDialog = document.querySelector("dialog#add-project");
  addProjectDialog.close();
});

const addToDoForm = document.querySelector("dialog#add-todo > form");
addToDoForm.addEventListener("submit", () => {
  const formData = new FormData(addToDoForm);
  let name = formData.get("name");
  let desc = formData.get("desc");
  let dueDate = formData.get("dueDate");
  let priority = formData.get("priority");
  let projectToAddTo = formData.get("projects");

  projects[projectToAddTo].addToProject(
    new ToDo(name, desc, dueDate, priority)
  );
  displayProject(projects[projectToAddTo]);
});

const cancelToDoButton = document.querySelector(
  "dialog#add-todo .cancel-button"
);
cancelToDoButton.addEventListener("click", () => {
  const addToDoDialog = document.querySelector("dialog#add-todo");
  addToDoDialog.close();
});

export function displayProjectSelect() {
  const projectSelect = document.querySelector("select#projects");
  while (projectSelect.hasChildNodes()) {
    projectSelect.removeChild(projectSelect.firstChild);
  }
  for (let i = 0; i < projects.length; i++) {
    const option = document.createElement("option");
    option.value = i; // Could use name as value but might be difficult to add to projects of same name
    option.textContent = projects[i].name;
    projectSelect.appendChild(option);
  }
}

function removeFromProjects(project) {
  let index = projects.findIndex((a) => a === project);
  projects.splice(index, 1);
}
