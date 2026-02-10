// Array to store all the books
const myLibrary = [];

// Book constructor 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); // Creates a unique id
}

function addBookToLibrary(title, author, pages, read) {
    // Creates a new book using the above constructor
    const newBook = new Book(title, author, pages, read);
    // Pushes the new book into the library array
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkein", "567", "Not read");
addBookToLibrary("Harry Potter", "J.K. Rowling", "761", "Not read");
console.log(myLibrary);