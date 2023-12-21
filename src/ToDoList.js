export default class ToDoList {
  constructor() {
    this.items = [];
  }

  addToList(item) {
    this.items.push(item);
  }

  removeFromList(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    console.log("Item removed.");
  }
}
