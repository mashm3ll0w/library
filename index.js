//jshint esversion:6

// ---- Modal Controllers --------------
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

// ------- global variables ----------------
let addBookToLibBtn = document.querySelector(".addToLib");
let titleField = document.getElementById("title");
let authorField = document.getElementById("author");
let numOfPages = document.getElementById("pages");
let ifRead = document.querySelector("input[type=radio]:checked");
let libraryContainer = document.querySelector(".library");

// constructor function
function Book(title, author, pages, haveRead) {
	{
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.haveRead = haveRead;
	}
}

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

// User Entered Books
addBookToLibBtn.addEventListener("click", () => {
	event.preventDefault();
	updateReadBtns();
	let newBook = JSON.stringify(new Book(titleField.value, authorField.value, numOfPages.value, document.querySelector("input[type=radio]:checked").value));
	myLibrary.push(JSON.parse(newBook));
	console.table(myLibrary);
	modal.style.display = "none";
	addBookToLibrary();
	toggleRead();
});

// Show in Library
function addBookToLibrary() {
	//title & author & pages
	let bookContainer = document.createElement("div");
	bookContainer.classList.add("book");
	let bookTitle = document.createElement("p");
	bookTitle.classList.add("book-title");
	bookTitle.innerHTML = titleField.value;
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

function defaultBooks() {
	let myBook = myLibrary.map(function (book) {
		let bookContainer = document.createElement("div");
		bookContainer.classList.add("book");
		// title & author & pages
		let bookTitle = document.createElement("p");
		bookTitle.classList.add("book-title");
		bookTitle.innerHTML = book.title;
		let bookAuthor = document.createElement("p");
		bookAuthor.classList.add("book-author");
		bookAuthor.innerHTML = `${book.author} - ${book.pages} pages`;
		//read and delete buttons
		let read = document.createElement("button");
		read.classList.add("readBtn");
		// check of the book is read or not
		if (book.haveRead === "yes") {
			read.innerHTML = "Not Read";
			bookContainer.classList.add("read");
		} else {
			read.innerHTML = "Read";
		}
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
}

function toggleRead() {
	document.querySelectorAll(".readBtn");
	let readBtn = document.querySelectorAll(".readBtn");
	let readStatus = document.querySelectorAll(".book");
	for (let i = 0; i < readBtn.length; i++) {
		readBtn[i].addEventListener("click", () => {
			if (readBtn[i].textContent === "Read") {
				readBtn[i].innerHTML = "Not Read";
				if (readStatus[i].classList.contains("read") === false) {
					readStatus[i].classList.add("read");
				}
			} else if (readBtn[i].textContent === "Not Read") {
				readBtn[i].innerHTML = "Read";
				if (readStatus[i].classList.contains("read") === true) {
					readStatus[i].classList.remove("read");
				}
			}
		});
	}
}

function updateReadBtns() {
	document.querySelectorAll(".readBtn");
}

defaultBooks();
toggleRead();

// delete function
function deleteBook() {
	deleteBtn = document.querySelectorAll(".remove-book");
	let parent = document.querySelector(".library");
	let child = document.querySelectorAll(".book");
	for (let a = 0; a < deleteBtn.length; a++) {
		deleteBtn[a].addEventListener("click", function () {
			myLibrary.splice(a, 1);
			console.log(a);
			console.table(myLibrary);
			parent.removeChild(child[a]);
		});
	}
}
deleteBook();
