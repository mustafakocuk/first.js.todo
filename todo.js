// tüm elementleri seçmek

const form = document.querySelector("#todo-form"); // form
const todoInput = document.querySelector("#todo"); // input
const todoList = document.querySelector(".list-group"); // ul 
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners()

function eventListeners(){ // event listenerları atamak.
    form.addEventListener("submit",addTodo);

}

function addTodo(e){

    const newTodo = todoInput.value.trim();

    addTodoToUI(newTodo) 

    

    e.preventDefault()
}

    let sayac = 0;

function addTodoToUI(newTodo) { 
    sayac ++;
    //  <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li> 

    // list item oluşturma
    const listItem = document.createElement("li");
    // Link oluşturma 
    const link = document.createElement("a");
    link.href="#";
    link.className = "delete-item"
    link.innerHTML = "<i class = '  fa fa-remove'></i>";

    listItem.className = `list-group-item d-flex justify-content-between li${sayac}`

    // Text Node 

    listItem.appendChild(document.createTextNode(newTodo)); 
    listItem.appendChild(link)
    console.log(listItem);

    // Todo List'e list item ekleme

    todoList.appendChild(listItem);


} // String değerini list item olarak UI'a ekleyecek.