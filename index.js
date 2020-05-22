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
		haveRead: "yes",
	},
	{
		title: "stealing worlds",
		author: "karl schroeder",
		pages: 430,
		haveRead: "no",
	},
	{
		title: "the wandering earth",
		author: "cixin liu",
		pages: 781,
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
	//read button
	let read = document.createElement("button");
	read.classList.add("readBtn");
	// check of the book is read or not
	if (book.haveRead === "yes") {
		read.innerHTML = "Not Read";
		bookContainer.classList.add("read");
	} else {
		read.innerHTML = "Read";
	}
	// delete button
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
		if (read === "yes") {
			return "Not Read";
		} else {
			return "Read";
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
	modal.style.display = "none";
	addBookToLibrary();
	toggleRead();
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
	let readBtn = document.createElement("button");
	readBtn.classList.add("readBtn");
	if (document.querySelector("input[type=radio]:checked").value === "yes") {
		readBtn.innerHTML = "Not Read";
		bookContainer.classList.add("read");
	} else {
		readBtn.innerHTML = "Read";
	}
	// ev
	let deleteBtn = document.createElement("button");
	deleteBtn.classList.add("remove-book");
	deleteBtn.innerHTML = "Delete";

	//append to library
	bookContainer.appendChild(bookTitle);
	bookContainer.appendChild(bookAuthor);
	bookContainer.appendChild(readBtn);
	bookContainer.appendChild(deleteBtn);
	libraryContainer.appendChild(bookContainer);
}

function toggleRead() {
	updateReadBtns();
	let readBtn = document.querySelectorAll(".readBtn");
	let readStatus = document.querySelectorAll(".book");
	for (let i = 0; i < readBtn.length; i++) {
		readBtn[i].addEventListener("click", () => {
			if (readBtn[i].textContent === "Read") {
				readBtn[i].innerHTML = "Not Read";
				if (!readStatus[i].classList.contains("read")) {
					readStatus[i].classList.add("read");
				}
			} else if (readBtn[i].textContent === "Not Read") {
				if (readStatus[i].classList.contains("read")) {
					readStatus[i].classList.remove("read");
				}
				readBtn[i].innerHTML = "Read";
			}
		});
	}
}

function updateReadBtns() {
	document.querySelectorAll(".readBtn");
}

toggleRead();
