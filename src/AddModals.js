export function newItemModal(list) {
    const dialog = document.createElement("dialog");
    // Remove this after
    dialog.setAttribute("open", "");
    
    const form = document.createElement("form");
    form.action = "";
    form.method = "dialog";
    
    dialog.appendChild(form);
    
    const h1 = document.createElement("h1");
    h1.textContent = "Add a New Task";
    form.appendChild(h1);
    
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

    for (let i = 0; i < list.length; i++) {
        const option = document.createElement("option");
        option.value = list[i];
        option.textContent = list[i].name;
        listSelect.appendChild(option);
    }
    
    form.appendChild(listDiv);

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    return dialog;
}

export function newListModal() {
    
}