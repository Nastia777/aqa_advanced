import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this._format = format;
    }

    printInfo() {
        //console.log(`Title: "${this._title}", author: ${this._author}, year: ${this._year}, format: ${this._format}.`);
        super.printInfo();
        console.log(`Format: ${this._format}.`);
    }

    get format() {
        return this._format;
    }

    set format(value) {
        if (value != "PDF" && value != "TXT" && value != "EPUB") {
            console.log("Format is invalid");
            return;
        }
        this._format = value;
    }

    static createEBook(book, format){
        const eBook = new EBook (book.title, book.author, book.year, format);
        return eBook;
    }  
}