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

//  Library
// Global Variables
let myLibrary = [];
let titleField = document.getElementById("title");
let authorField = document.getElementById("author");
let numOfPages = document.getElementById("pages");
let newBookBtn = document.querySelector(".addToLib");

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

function addBookToLibrary() {
	// Get the title, author, pages and read status
	let bookTitle = titleField.value;
	let bookAuthor = authorField.value;
	let bookPages = numOfPages.value;
	console.log(bookTitle, bookAuthor, bookPages);
}

newBookBtn.addEventListener("click", () => {
	event.preventDefault();
	let bookTitle = titleField.value;
	let bookAuthor = authorField.value;
	let bookPages = numOfPages.value;
	let readStatus = document.querySelector("input[type=radio]:checked").value;
	console.log(bookTitle, bookAuthor, bookPages, readStatus);
	modal.style.display = "none";
});
