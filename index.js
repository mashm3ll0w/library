//jshint esversion:6

// Modal Controllers
let modal = document.getElementById("myModal");
let modalBtn = document.querySelector(".addBtn");
let closeBtn = document.getElementsByClassName("close")[0];

// Modal Functions
// open modal
modalBtn.addEventListener("click", () => {
	modal.style.display = "block";
});
// close modal
closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
});
// close modal when user clicks outside the modal area
window.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.style.display = "none";
	}
});

//  Default Library
let myLibrary = [
	{
		title: "killing floor",
		author: "lee child",
		pages: 473,
		haveRead: "no",
	},
	{
		title: "stealing worlds",
		author: "karl schroeder",
		pages: 430,
		haveRead: "yes",
	},
	{
		title: "the wandering earth",
		author: "cixin liu",
		pages: 781,
		haveRead: "no",
	},
	{
		title: "this mortal coil",
		author: "emily suvada",
		pages: 586,
		haveRead: "yes",
	},
];

// global variables
let newBookBtn = document.querySelector(".addToLib");
let titleField = document.getElementById("title");
let authorField = document.getElementById("author");
let numOfPages = document.getElementById("pages");
let libraryContainer = document.querySelector(".library");

// add default books on page load
let myBook = myLibrary.map(function (book) {
	
	// individual book container
	let bookContainer = document.createElement("div");
	bookContainer.classList.add("book");
	// title
	let bookTitle = document.createElement("p");
	bookTitle.classList.add("book-title");
	bookTitle.innerHTML = book.title;
	// author + pages
	let bookAuthor = document.createElement("p");
	bookAuthor.classList.add("book-author");
	bookAuthor.innerHTML = `${book.author} - ${book.pages} pages`;
	//read and delete buttons
	let read = document.createElement("button");
	read.classList.add("readBtn");
	read.innerHTML = "Read";
	let deleteBtn = document.createElement("button");
	deleteBtn.classList.add("remove-book");
	deleteBtn.innerHTML = "Delete";

	//append to library
	bookContainer.appendChild(bookTitle);
	bookContainer.appendChild(bookAuthor);
	bookContainer.appendChild(read);
	bookContainer.appendChild(deleteBtn);
	libraryContainer.appendChild(bookContainer);
});

// constructor function
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = function () {
		if (read) {
			return true;
		}
	};
}

// capture the new books the user enters
newBookBtn.addEventListener("click", () => {
	event.preventDefault();
	let newBook = {
		title: titleField.value,
		author: authorField.value,
		pages: parseInt(numOfPages.value),
		haveRead: document.querySelector("input[type=radio]:checked").value,
	};
	myLibrary.push(newBook);
	console.table(myLibrary);
	modal.style.display = "none";
	addBookToLibrary();
});

// show the book in the library
function addBookToLibrary() {
	// individual book container
	let bookContainer = document.createElement("div");
	bookContainer.classList.add("book");
	// title
	let bookTitle = document.createElement("p");
	bookTitle.classList.add("book-title");
	bookTitle.innerHTML = titleField.value;
	// author + pages
	let bookAuthor = document.createElement("p");
	bookAuthor.classList.add("book-author");
	bookAuthor.innerHTML = `${authorField.value} - ${numOfPages.value} pages`;

	//read and delete buttons
	let read = document.createElement("button");
	read.classList.add("readBtn");
	read.innerHTML = "Read";
	let deleteBtn = document.createElement("button");
	deleteBtn.classList.add("remove-book");
	deleteBtn.innerHTML = "Delete";

	//append to library
	bookContainer.appendChild(bookTitle);
	bookContainer.appendChild(bookAuthor);
	bookContainer.appendChild(read);
	bookContainer.appendChild(deleteBtn);
	libraryContainer.appendChild(bookContainer);
}
