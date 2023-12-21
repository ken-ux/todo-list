import { format } from "date-fns";

export default class ToDoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get dueDate() {
    return this._dueDate;
  }

  // Make date readable
  set dueDate(date) {
    this._dueDate = format(date, "yyyy-MM-dd");
  }

  completed = false;
  toggleItem() {
    this.completed = !this.completed;
  }
}
