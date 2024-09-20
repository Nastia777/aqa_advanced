const array = [1, 2, 3, 4, 5];

const newArray = array.map((num) => num * array.indexOf(num));
console.log(newArray);