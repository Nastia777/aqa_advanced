const printNum = (num) => {
    console.log(`${num}`);

    if (num > 0) {
        printNum(num-1);
    }

}

printNum(5);