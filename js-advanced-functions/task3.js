const divide = (numerator, denominator) => {
    if (denominator == 0) {
        throw new Error("Denominator should not be equal to 0!");
    }

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Denominator and numerator should be numbers!");
    }

    return numerator / denominator;
}

try {
    divide(4, 0);
}
catch (error) {
    console.error("Error:", error.message);
}
finally {
    console.log("Job is finished.");
}

try {
    divide("row", 2);
}
catch (error) {
    console.error("Error:", error.message);
}
finally {
    console.log("Job is finished.");
}

try{
    console.log(divide (4,2));
}
catch (error) {
    console.error("Error:", error.message);
}
finally {
    console.log("Job is finished.");
}