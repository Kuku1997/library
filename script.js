// array to store books 
let myLibary = [];

// constructor to make book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// dom nodes to get user info from input boxes
const createBtn = document.getElementById("createBtn");
const title = document.getElementById("titleField").innerText;
const author = document.getElementById("authorField").innerText;
const pages = document.getElementById("pagesField").innerText;
const read = document.getElementById("readField").innerText;

createBtn.addEventListener("click", addBookToLibrary())

// functions to create new book from user info
function addBookToLibrary() {
  var book = new Book(title, author, pages, read)
  myLibary.push(book)
}
