//Select tags
const listContainer = document.querySelector("#new-task");
const input = document.querySelector("input");

// Main Function
function addTask() {
  let inputValue = input.value.trim();
  if (inputValue !== "") {
    listContainer.prepend(newList());
    input.value = "";
    saveData();
  } else {
    alert("You must type something!");
  }
}

// ------------------------------
// New List Creation;
function newList() {
  let newList = document.createElement("li");
  togBtn();
  text();
  delBtn();
  newList.appendChild(togBtn());
  newList.appendChild(text());
  newList.appendChild(delBtn());
  return newList;
}
// toggle button Creation;
function togBtn() {
  let togBtn = document.createElement("button");
  togBtn.className = "tog-btn";
  togBtn.innerHTML = "";
  togBtn.setAttribute("onclick", "toggle(this)");
  return togBtn;
}
// Text Creation
function text() {
  let text = document.createElement("span");
  text.className = "text";
  text.innerText = input.value;
  return text;
}
// Delete button Creation;
function delBtn() {
  let delBtn = document.createElement("button");
  delBtn.className = "del-btn ";
  delBtn.innerHTML =
    '<i class="fa-solid fa-trash"></i> <span class="del-txt">Delete</span>';
  delBtn.setAttribute("onclick", "deleteBtn(this)");
  return delBtn;
}
// --------------------------------
let isCheck = false;
function toggle(element) {
  let text = element.nextElementSibling;
  if (!isCheck) {
    text.classList.add("checked-text");
    element.classList.add("checked-tog-btn");
    element.innerHTML = '<i class="fa-solid fa-check"></i>';
    isCheck = true;
  } else {
    text.classList.remove("checked-text");
    element.classList.remove("checked-tog-btn");
    element.innerHTML = "";
    isCheck = false;
  }
  saveData();
}

// Delete item
function deleteBtn(Element) {
  Element.parentElement.remove();
  saveData();
}

// ------------------------------------
// Save data in Local Storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// get from localStorage
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
// ----------------------------------
