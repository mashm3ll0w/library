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
];

let titleField = document.getElementById("title");
let authorField = document.getElementById("author");
let numOfPages = document.getElementById("pages");
let newBookBtn = document.querySelector(".addToLib");

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
});

// show the book in the library
function addBookToLibrary() {}
