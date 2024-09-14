// function declaration

function calculateRectArea(width, height){
    const rectArea = width * height;
    return rectArea;
}

const result = calculateRectArea(5, 10);
console.log("Rectangle area = " + result);

// function expression

const square = function calculateSquare (width, height) {
    return width * height;
}

console.log("Rectangle area = " + square(5,10));

// arrow function

const rectSquare = (width, height) => width * height;
console.log("Rectangle area = " + rectSquare(5,10));
