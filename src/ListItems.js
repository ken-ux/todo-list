export function createListItems(list) {
  const listItems = document.createElement("div");
  listItems.id = "list-items";

  let listTitle = document.createElement("h1");
  listTitle.textContent = list.name;
  listItems.append(listTitle);

  for (let i = 0; i < list.items.length; i++) {
    let item = document.createElement("div");
    item.classList = "item";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    item.appendChild(checkbox);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        itemContent.classList = "item-content completed";
      } else {
        itemContent.classList = "item-content";
      }
    });

    let itemContent = document.createElement("div");
    itemContent.classList = "item-content";
    item.appendChild(itemContent);

    let firstDiv = document.createElement("div");
    itemContent.appendChild(firstDiv);

    let itemTitle = document.createElement("h2");
    itemTitle.textContent = list.items[i].title;
    firstDiv.appendChild(itemTitle);

    let description = document.createElement("p");
    description.textContent = list.items[i].description;
    firstDiv.appendChild(description);

    let secondDiv = document.createElement("div");
    secondDiv.classList = "item-footer";
    itemContent.appendChild(secondDiv);

    let dueDate = document.createElement("p");
    dueDate.textContent = list.items[i].dueDate;
    secondDiv.appendChild(dueDate);

    let priorityBadge = document.createElement("div");
    priorityBadge.classList = `badge ${list.items[i].priority}`;
    priorityBadge.textContent = list.items[i].priority;
    secondDiv.appendChild(priorityBadge);

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      list.removeFromList(list.items[i]);
      listItems.removeChild(item);
    });
    item.appendChild(deleteButton);

    listItems.appendChild(item);
  }

  return listItems;
}

export default function displayList(list) {
  const content = document.querySelector("#content");
  if (content.lastChild.id === "list-items") {
    content.replaceChild(createListItems(list), content.lastChild);
  } else {
    content.appendChild(createListItems(list));
  }
}
