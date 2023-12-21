export default class ToDoList {
  constructor() {
    this.items = [];
  }

  addToList(item) {
    this.items.push(item);
  }

  removeFromList(item) {
    console.log("Item removed.");
  }
}
