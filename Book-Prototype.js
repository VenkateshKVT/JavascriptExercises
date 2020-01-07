// //Note
// We need paranthesis while calling the function
// But function definition doesn't need paranthesis

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getTitle = function() {
    return "Title: "+this.title;
}

Book.prototype.getAuthor = function() {
    return "Author: "+this.author;
}

var PP = new Book('Pride and Prejudice','Jane Austen');
var H = new Book('Hamlet','William Shakespeare');
var WP = new Book('War and Peace','Leo Tolstoy');

console.log("PP author ", PP.getAuthor());
console.log("PP title ", PP.getTitle());
