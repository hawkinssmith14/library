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

function displayBooks() {
    const library = document.getElementById("books");
    library.textContent = "";
    
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p"); 
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement("p");
        read.textContent = book.read;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        library.appendChild(card);
    });
}

displayBooks();