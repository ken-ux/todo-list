export class ToDoList {
  constructor(name) {
    this.name = name;
    this.items = new Array();
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
    }
  }