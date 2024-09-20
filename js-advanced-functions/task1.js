const handleEven = () => console.log("Number is even");

const handleOdd = () => console.log("Number is odd");

const handleNum = (number, evenCallback, oddCallback) => {
    if (number % 2 === 0) {
        evenCallback();
    }
    else { 
        oddCallback();
    }
}

handleNum(4, handleEven, handleOdd);
handleNum(1, handleEven, handleOdd);