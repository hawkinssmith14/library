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

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    // Creates a new book using the above constructor
    const newBook = new Book(title, author, pages, read);
    // Pushes the new book into the library array
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkein", "567", true);
addBookToLibrary("Harry Potter", "J.K. Rowling", "761", false);
console.log(myLibrary);

function displayBooks() {
    const body = document.getElementById("books-body");
    body.textContent = "";
    
    myLibrary.forEach((book) => {
        const row = document.createElement("tr");
        row.classList.add("book-card");

        const title = document.createElement("td");
        title.textContent = `"${book.title}"`;

        const author = document.createElement("td");
        author.textContent = book.author;

        const pages = document.createElement("td"); 
        pages.textContent = book.pages;

        const read = document.createElement("td");
        const readToggle = document.createElement("input");
        readToggle.type = "checkbox";
        readToggle.checked = !!book.read;
        readToggle.addEventListener("change", () => {
            book.toggleRead();
        });
        read.appendChild(readToggle);

        const actions = document.createElement("td");
        actions.classList.add("delete-cell");

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            const index = myLibrary.findIndex((item) => item.id === book.id);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayBooks();
            }
        });

        actions.appendChild(deleteBtn);

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);
        row.appendChild(actions);

        body.appendChild(row);
    });
}

displayBooks();

const form = document.querySelector("#book-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = form.title.value.trim();
    const author = form.author.value.trim();
    const pages = Number(form.pages.value);
    const read = form.read.checked;

    addBookToLibrary(title, author, pages, read);
    form.reset();

    displayBooks();

    
});
