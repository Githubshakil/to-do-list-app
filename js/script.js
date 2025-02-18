const inputbox = document.getElementById("input-box"); // Input box for adding tasks
const listcontainer = document.getElementById("list-container"); // Container for task list

function addTask() {
    if (inputbox.value === '') { // Check if the input box is empty
        alert("You must write something !"); // Alert if input is empty
    } else {
        let li = document.createElement("li"); // Create a new list item (li)
        li.innerHTML = inputbox.value; // Set the content of the list item to the input box value
        listcontainer.appendChild(li); // Append the list item to the task list container
        let span = document.createElement("span"); // Create a new span element for the delete button
        span.innerHTML = "\u00d7"; // Set the content of the span to '×' (delete symbol)
        li.appendChild(span); // Append the span (delete button) to the list item
    }

    inputbox.value = ''; // Clear the input box after adding the task
    saveData(); // Save the updated task list to local storage
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { // Check if a list item (li) is clicked
        e.target.classList.toggle("checked"); // Toggle the checked class for the clicked list item
        saveData(); // Save the updated task list to local storage
    } else if (e.target.tagName === "SPAN") { // Check if a span (delete button) is clicked
        e.target.parentElement.remove(); // Remove the parent list item of the clicked delete button
        saveData(); // Save the updated task list to local storage
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML); // Save the task list HTML to local storage
}

function showList() {
    listcontainer.innerHTML = localStorage.getItem("data"); // Retrieve and display the task list from local storage
}

showList(); // Display the task list when the page loads
