// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.


class Book {constructor(title, genre, author, isRead) {
    this.title = "";
    this.genre = "";
    this.author = "";
    this.isRead = false;
  }
}
let book1 = new Book("book1");
book1.title = "meowsers and the meows";
book1.genre = "Kitties";
book1.author = "little Sir";
book1.isRead = true;
let book2 = new Book("book2");
let book3 = new Book("book3");
let book4 = new Book("book4");
let book5 = new Book("book5");}

console.log(book1, book2, book3, book4, book5);
