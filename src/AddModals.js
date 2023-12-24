import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
import displayList from "./ListItems";
import { refreshSidebar } from "./sidebar";

export function newItemModal(lists) {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("open", "");

  const form = document.createElement("form");
  form.action = "";
  form.method = "dialog";

  dialog.appendChild(form);

  const h2 = document.createElement("h2");
  h2.textContent = "Add a New Task";
  form.appendChild(h2);

  // Create first field: title
  const titleDiv = document.createElement("div");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";
  titleDiv.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleDiv.appendChild(titleInput);

  form.appendChild(titleDiv);

  // Create second field: description
  const descDiv = document.createElement("div");

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "desc");
  descLabel.textContent = "Description";
  descDiv.appendChild(descLabel);

  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.id = "desc";
  descInput.name = "desc";
  descDiv.appendChild(descInput);

  form.appendChild(descDiv);

  // Create third field: due date
  const dateDiv = document.createElement("div");

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Due Date";
  dateDiv.appendChild(dateLabel);

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "date";
  dateInput.name = "date";
  dateInput.value = new Date().toJSON().slice(0, 10);
  dateDiv.appendChild(dateInput);

  form.appendChild(dateDiv);

  // Create fourth field: priority
  const priorityDiv = document.createElement("div");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priorirty";
  priorityDiv.appendChild(priorityLabel);

  const prioritySelect = document.createElement("select");
  prioritySelect.id = "priority";
  prioritySelect.name = "priority";
  priorityDiv.appendChild(prioritySelect);

  let priorityOptions = ["high", "medium", "low"];

  for (let i = 0; i < priorityOptions.length; i++) {
    const option = document.createElement("option");
    option.value = priorityOptions[i];
    option.textContent = priorityOptions[i];
    prioritySelect.appendChild(option);
  }

  form.appendChild(priorityDiv);

  // Create fifth field: add to list
  const listDiv = document.createElement("div");

  const listLabel = document.createElement("label");
  listLabel.setAttribute("for", "list");
  listLabel.textContent = "Add to List";
  listDiv.appendChild(listLabel);

  const listSelect = document.createElement("select");
  listSelect.id = "list";
  listSelect.name = "list";
  listDiv.appendChild(listSelect);

  for (let i = 0; i < lists.length; i++) {
    const option = document.createElement("option");
    option.value = lists[i].name;
    option.textContent = lists[i].name;
    listSelect.appendChild(option);
  }

  form.appendChild(listDiv);

  // Create submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  form.addEventListener("submit", () => {
    const formData = new FormData(form);
    let title = formData.get("title");
    let desc = formData.get("desc");
    let date = formData.get("date");
    let priority = formData.get("priority");
    let list_name = formData.get("list");

    let newTask = new ToDoItem(title, desc, date, priority);
    let selectedList = lists.find((list) => list.name === list_name);
    selectedList.addToList(newTask);
    displayList(selectedList);
  });

  return dialog;
}

export function newListModal(lists) {
  const dialog = document.createElement("dialog");
  // Remove this after
  dialog.setAttribute("open", "");

  const form = document.createElement("form");
  form.action = "";
  form.method = "dialog";

  dialog.appendChild(form);

  const h2 = document.createElement("h2");
  h2.textContent = "Create a List";
  form.appendChild(h2);

  const titleDiv = document.createElement("div");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "List Name";
  titleDiv.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleDiv.appendChild(titleInput);

  form.appendChild(titleDiv);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  form.addEventListener("submit", () => {
    const formData = new FormData(form);
    let title = formData.get("title");

    let newList = new ToDoList(title);
    lists.push(newList);
    refreshSidebar(lists);
  });

  return dialog;
}
