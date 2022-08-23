const table = document.querySelector('table')
const button = document.getElementById('button')
const bookContainer = document.getElementById('book-container')

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

function loopThrough() {
    bookContainer.innerHTML = `<div class="book-container" id="book-container" style="top: 30%; right: 30%;">
    <div class="author">
          <h4><input type="text" id="author" name="author"></h4>
      </div>
          <div class="book">
          <h4><input type="text" id="name" name="name"></h4>
      </div>
      <div class="pages">
      <h4><input type="text" id="pages" name="pages"></h4>
      </div>
      <div class="read">
      <input type="radio" id="author" name="author" value="yes" checked>
          <label for="yes">Yes</label>
      <input type="radio" id="author" name="author" value="no" checked>
          <label for="no">No</label>        
      </div>`
    }

button.addEventListener('click', () => {
    loopThrough();
})