const table = document.querySelector('table')
const button = document.getElementById('button')
const bookContainer = document.getElementById('book-container')
const bookShelf = document.getElementById(('book-shelf'))
const input = document.getElementById('author')

let myLibrary = [{
    author: "Ion Creanga",
    title: "Punguta cu doi bani",
    pages: 8,
    read: true
},{
    author: "Alexandr Soljenitin",
    title: "Arhipelagul Gulag",
    pages: 1500,
    read: true
},{
    author: "Feodor Dostoevsky",
    title: "Fratii Karamazov",
    pages: 976,
    read: false
}]; 

const randomIndex = Math.floor(Math.random() * myLibrary.length);

const book = function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read ? "true" : "false";
}

function addBookToLibrary() {
    myLibrary.append(book);
}


function addBook() {
    const div_add = document.createElement("div");
    div_add.id = "div_add"
    div_add.innerHTML = `${input.value}`
    const remove_button = document.createElement("button");
    remove_button.id = "remove";
    remove_button.value = "remove";
    remove_button.innerHTML = "remove";
    remove_button.style = "height: 30px;";
    remove_button.addEventListener("click", function (e) {
        bookShelf.removeChild(div_add);
        bookShelf.removeChild(remove_button);
        bookShelf.removeChild(read_button);
    })
    const read_button = document.createElement("button");
    read_button.id = "remove";
    read_button.value = "remove";
    read_button.innerHTML = "read";
    read_button.style = "height: 30px;";
    bookShelf.appendChild(div_add);
    bookShelf.appendChild(remove_button);
    bookShelf.appendChild(read_button);
    read_button.addEventListener("click", function (r) {
        div_add.style = "background-color: orange; display: flex; justify-content: center; align-items: center;";
    })
    input.value = ""
}

function removeBook() {
    const removal = document.getElementById('div_add');
    removal.innerHTML = ``
}


button.addEventListener('click', () => {
    addBook();
})


