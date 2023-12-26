import "./style.css";
import { ToDo, Project } from "./appLogic";

const projects = [];
projects.push(new Project("default"));
projects.push(new Project("default_2"));
projects.push(new Project("default_3"));

const sidebar = document.querySelector("#sidebar");
for (let i = 0; i < projects.length; i++) {
  const project = document.createElement("div");
  project.textContent = projects[i].name;
  sidebar.appendChild(project);
}

const main = document.querySelector("main");
let projectName = document.createElement("h1");
projectName.textContent = projects[0].name;
main.appendChild(projectName);