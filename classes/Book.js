class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`Title: "${this.title}", author: ${this.author}, year: ${this.year}.`);
    }
}

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1997);
book1.printInfo();

const book2 = new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 1967);
book2.printInfo();