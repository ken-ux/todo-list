export default class Project {
  constructor(name) {
    this.name = name;
    this.items = new Array();
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

  addToProject(item) {
    this.items.push(item);
  }

  removeFromProject(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
