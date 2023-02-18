let myLibrary = [];

const library = document.querySelector('.library');
const bookForm = document.querySelector('#bookForm');
 
bookForm.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents page submitting

    let newBook = new Book(bookForm.elements['bookTitle'].value,bookForm.elements['bookAuthor'].value, bookForm.elements['bookPages'].value, bookForm.elements['read'].checked);
    console.log(newBook);
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
});
const bookSubmit = document.querySelector('.submitButton');
const bookTitle = document.getElementsByClassName('.booktitle');

bookSubmit.addEventListener('click', enterBook());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(read === true){
            return `${title} by ${author}, ${pages} pages, read.`;
        }
        else{
            return `${title} by ${author}, ${pages} pages, not read.`;
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks (array) {
    library.textContent = "";
    for(let i=0;i<array.length;i++) {
        let newBookDisplay = document.createElement('div');
        newBookDisplay.textContent = array[i].info();
        library.appendChild(newBookDisplay);
    }
    
}

function enterBook() {
    console.log()
}

const lotr = new Book('Fellowship Of The Ring', 'J.R.R Tolkien', 300, false);
const dune = new Book('Dune', 'Frank Herbert', 600, 'true');
addBookToLibrary(lotr);
addBookToLibrary(dune);

displayBooks(myLibrary);

