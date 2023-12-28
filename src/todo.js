export default class ToDo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
  }

  // get name() {
  //   return this._name;
  // }

  // set name(value) {
  //   if (value === "") {
  //     throw new TypeError("Name cannot be empty.");
  //   } else {
  //     this._name = value;
  //   }
  // }

  toggleComplete() {
    this.complete = !this.complete;
  }
}
