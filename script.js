const table = document.querySelector('table')


let myLibrary = [];

const book = function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read ? "true" : "false";
}

function addBookToLibrary() {
    myLibrary.append(book);
}

function loopThrough {
    for (books in myLibrary) {
       let newBook = document.createElement('div');
       let text = `<div class="table">
       <div class="author">
             <h4>Author</h4>
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