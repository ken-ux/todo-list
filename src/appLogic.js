export class ToDoProject {
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

  addToList(item) {
    this.items.push(item);
  }

  removeFromList(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

export class ToDoItem {
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
