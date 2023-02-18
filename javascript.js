const myLibrary = [];

const library = document.querySelector('.library');
const bookForm = document.querySelector('#bookForm');
const showButton = document.querySelector('.addBook');
const formContainer = document.querySelector('.formSection');

showButton.addEventListener('click', () => {
  if (formContainer.style.display !== 'block') {
    formContainer.style.display = 'block';
  } else {
    formContainer.style.display = 'none';
  }
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  if (this.read === true) {
    return `${this.title} by ${this.author}, ${this.pages} pages, read.`;
  }

  return `${this.title} by ${this.author}, ${this.pages} pages, not read.`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// clears library display and regenerates list with new book
function displayBooks(array) {
  library.textContent = '';
  for (let i = 0; i < array.length; i += 1) {
    const newBookDisplay = document.createElement('div');
    const removeButton = document.createElement('button');
    const toggleRead = document.createElement('button');
    toggleRead.textContent = 'Toggle Read';
    toggleRead.className = i;
    toggleRead.addEventListener('click', () => {
      if (myLibrary[i].read === true) {
        myLibrary[i].read = false;
      } else {
        myLibrary[i].read = true;
      }
      displayBooks(myLibrary);
    });
    removeButton.textContent = 'Remove';
    removeButton.className = i;
    removeButton.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      displayBooks(myLibrary);
    });
    newBookDisplay.textContent = array[i].info();
    newBookDisplay.appendChild(removeButton);
    newBookDisplay.appendChild(toggleRead);
    library.appendChild(newBookDisplay);
  }
}

bookForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevents page submitting
  const newBook = new Book(
    bookForm.elements.bookTitle.value,
    bookForm.elements.bookAuthor.value,
    bookForm.elements.bookPages.value,
    bookForm.elements.read.checked,
  );
  addBookToLibrary(newBook);
  displayBooks(myLibrary);
});
// Prepopulate library with some books
const lotr = new Book('Fellowship Of The Ring', 'J.R.R Tolkien', 300, false);
const dune = new Book('Dune', 'Frank Herbert', 600, 'true');
addBookToLibrary(lotr);
addBookToLibrary(dune);

displayBooks(myLibrary);
