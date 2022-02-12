//TANIMLAMALAR
const todoList = document.querySelector("#list")
const TODO_ITEM = document.querySelector("#task")
const ADD_BTN = document.querySelector("#liveToastBtn")
const toastMes = document.querySelector(".toast")
const alertDOMError = document.querySelector("#liveToastError")
const alertDOMSuccess = document.querySelector("#liveToastSuccess")
const alertDOMDelete = document.querySelector("#liveToastDelete")
const closeButton = document.querySelector("#closeButton")
const totalList = document.querySelector(".totalList")
const deleteAllBtn = document.querySelector(".footer button")
const footer = document.querySelector(".footer")
const headerSpan = document.querySelector(".header span")

headerSpan.innerHTML = ("Notunuzu Girin");
//Local Storage dan veriyi getir diziye ata yada dizi oluştur. 
let listArr = localStorage.getItem('New Todo') ? JSON.parse(localStorage.getItem('New Todo')) : [];
showTask();

TODO_ITEM.onkeydown = () => {
    let data = TODO_ITEM.value;
    if(data.trim() != 0){
        ADD_BTN.classList.add("active");
        headerSpan.innerHTML = ("Not Ekle");
    } else {
        ADD_BTN.classList.remove("active");
        headerSpan.innerHTML = ("Notunuzu Girin");
    }
}

function newElement() {
    headerSpan.innerHTML = ("Notunuzu Girin");
    addItem(TODO_ITEM.value)
    addToast(alertDOMSuccess)
    TODO_ITEM.value = "" 
}

const addToast = (type) => new bootstrap.Toast(type).show();

const addItem = () => { 
    ADD_BTN.classList.remove("active");
    // let getLocalStorage = localStorage.getItem("New Todo");
    // if(getLocalStorage == null) {
    //     listArr = [];
    // } else {
    //     listArr = JSON.parse(getLocalStorage);
    // }
    listArr.push(TODO_ITEM.value);
    localStorage.setItem("New Todo", JSON.stringify(listArr));

    showTask();
}

function showTask() {
    // let getLocalStorage = localStorage.getItem("New Todo");
    // if(getLocalStorage == null) {
    //     listArr = [];
    // } else {
    //     listArr = JSON.parse(getLocalStorage);
    // }
    totalList.textContent = listArr.length;
    if(listArr.length > 0) {
        footer.classList.remove("not-visible")
        //deleteAllBtn.classList.add("active")
    } else {
        footer.classList.add("not-visible")
        //deleteAllBtn.classList.remove("active")
    }
    let newLiTag = "";
    listArr.forEach((element, index) => {
        newLiTag += 
        `
        <li>${element}
        <span id="closeButton" class="closeBtn" onclick="removeItem(${index})"><i class="fas fa-trash"></i></span></li>
        `;
        //<span onclick="removeItem()"><i class="fas fa-trash"></i></span> 
        //<button id="closeButton" onclick="removeItem(${index})" type="button" class="btn-close closeBtn" data-bs-dismiss="toast" aria-label="Close"></button>
    });
    todoList.innerHTML = newLiTag;
}

function removeItem(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    //silme sonrası localstorage güncelleme
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    addToast(alertDOMDelete)
    showTask();
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    addToast(alertDOMDelete)
    showTask();
}