console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
/* This exercise utilizes the array of numbers in the function below in order to sum all of the values.*/

const numbers = [2, 22, 12, 17, 18, 39, 129]

function arraySum (arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }

    return sum;

}
let sum1 = arraySum(numbers);
let sum2 = ([1, 2, 3, 4, 5]);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "The Outsides",
    author: "S. E. Hinston",
    pages: 192,
    readCount: 2,
    info: function () {
        return `${this.title} by ${this.author} is ${this.pages} pages long, and has been read ${this.readCount} times.`;
    }
}
book.author; 
book.readCount ++; 

console.log(book.info());

// Exercise 3
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseStr(str) {
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        reverseStr = str[i] + reverseStr;
    }

    return reverseStr;
}

function reverseWordsFromSentence(sentence) { 
    let result = "";

    let words = sentence.split(" ");

    let reversedWords = words.map(function (word) {
        return reversedStr(word);
    });

    return reversedWords.join(" ");
}

console.log (reversedWords); 

// Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

console.log(csvData);

function toJSON(input) {
    let dataArr = input.split("\n");

    let headers = dataArr[0].split(",");

    let records = dataArr.slice(1);

    console.log(headers,records);

    let json =records.map(function (record) {
        let values = record.split(",");
        let obj = {};
        headers.forEach(function (header,index) {
            obj[header] = values[index];
        })
        return obj;
    })
    return json;
}
let result = toJSON(csvData);
console.log(result);
