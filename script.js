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
    //library.textContent = "";
    
    myLibrary.forEach((book) => {
        const card = document.createElement("tr");
        card.classList.add("book-card");

        const title = document.createElement("td");
        title.textContent = `"${book.title}"`;

        const author = document.createElement("td");
        author.textContent = book.author;

        const pages = document.createElement("td"); 
        pages.textContent = book.pages;

        const read = document.createElement("td");
        read.textContent = book.read;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        library.appendChild(card);
    });
}

displayBooks();

const newBookBtn = document.querySelector("new-book-btn");
const container = document.querySelector("form-container");
newBookBtn.addEventListener("click", () => {
    const bookForm = document.createElement("form");

})