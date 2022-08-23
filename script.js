const table = document.querySelector('table')
const button = document.querySelector('button')

let myLibrary = [{
    author: "Ion Creanga",
    title: "Punguta cu doi bani",
    pages: 8,
    read: yes
},{
    author: "Alexandr Soljenitin",
    title: "Arhipelagul Gulag",
    pages: 1500,
    read: yes
},{
    author: "Feodor Dostoevsky",
    title: "Fratii Karamazov",
    pages: 976,
    read: no
}];

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
    for (books in myLibrary) {
       let newBook = document.createElement('div');
       let text = `<div class="table" style="background-color:blue; ">
       <div class="author">
             <h4>${this.myLibrary[0]}</h4>
         </div>
             <div class="book">
             <h4>Book</h4>
         </div>
         <div class="pages">
             <h4>Pages</h4>
         </div>
         <div class="read">
             <h4>Read?</h4>
         </div>
     </div>`
        newBook.appendChild(text);
    }
}

button.addEventListener('click', () => {
    loopThrough();
})