export class Book {

    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    printInfo() {
        console.log(`Title: "${this._title}".`);
        console.log(`Author: ${this._author}.`);
        console.log(`Year: ${this._year}.`)
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (value > 2024) {
            console.log("Year that is greater than present is not possible.");
            return;
        }
        this._year = value;
    }

    static getOldestBook(books) {
        let oldestBook = books[0];
        for (let i = 1; i < books.length; i++) {
            const currentBook =  books[i];
            if (currentBook.year < oldestBook.year) {
                oldestBook = books[i];
            }
        }
        return oldestBook;
    }
}