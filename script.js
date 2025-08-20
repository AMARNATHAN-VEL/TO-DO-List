const input = document.querySelector("input");
const listContainer = document.getElementById("list-container");
const helpText = document.getElementById("help");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); 
    addList();
  }
});

function addList() {
  let inputValue = input.value.trim();
  if (inputValue !== "") {
    helpText.innerHTML = "";
    listContainer.prepend(createList(inputValue));
    input.value = "";
    saveData();
  } else {
    helpText.innerText = "You must type something!";
  }
}

function createList(val) {
  let list = document.createElement("li");
  list.className = "list";
  list.innerHTML = `<i class="fa-solid fa-circle" onclick='tog(this)'></i><span class="txt">${val}</span><i class="fa-solid fa-trash-can" onclick="del(this)"></i>`;
  return list;
}

function tog(element) {
  if (element.className == "fa-solid fa-circle") {
    element.className = "fa-solid fa-circle-check";
    element.nextElementSibling.classList.toggle("txt-cmpt");
  } else {
    element.className = "fa-solid fa-circle";
    element.nextElementSibling.classList.toggle("txt-cmpt");
  }
  saveData();
}

function del(element) {
  element.parentElement.remove();
  saveData();
}

function saveData() {
  localStorage.setItem("Data", JSON.stringify(listContainer.innerHTML));
}

function showData() {
  listContainer.innerHTML = JSON.parse(localStorage.getItem("Data"));
}

showData();

