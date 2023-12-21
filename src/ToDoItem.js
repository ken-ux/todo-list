export default class ToDoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  completed = false;
  toggleItem() {
    this.completed = !this.completed;
  }
}
