import Book from "./Book.js";
import EBook from "./EBook.js";

//Book instances

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1997);
book1.printInfo();
//use getter
console.log(book1.author);
//use setter 
book1.year = 2025; //Year that is greater than present is not possible.
book1.year = 2023;
console.log(book1.year);


const book2 = new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 1967);
book2.printInfo();
//use getter
console.log(book2.title);
console.log(book2.year);

//EBook instances
const eBook1 = new EBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1997, "PDF");
eBook1.printInfo();
//use getter
console.log(eBook1.format);
//use setter
eBook1.format = "Kindle";
eBook1.format = "EPUB";
console.log(eBook1.format);
