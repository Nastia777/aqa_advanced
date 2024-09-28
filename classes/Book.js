export default class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    printInfo() {
        console.log(`Title: "${this._title}", author: ${this._author}, year: ${this._year}.`);
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

    // static sortByYear(...arg) {
    //     for ()
    // }
}