const car1 = {
    brand: "Ford",
    model: "Ford E-Transit",
    year: 2000
}

const car2 = {
    brand: "BMW",
    model: "BMW XM",
    owner: 2004
}

const car3 = {...car1, ...car2}

console.log(car3);