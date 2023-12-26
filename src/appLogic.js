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