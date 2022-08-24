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
    const div = document.createElement("div");
    div.innerHTML = `${input.value}`
    bookShelf.appendChild(div);
}


button.addEventListener('click', () => {
    addBook();
})