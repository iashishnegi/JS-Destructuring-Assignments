// // //1. Count the occurrences.You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.


let input = "hi my name is ashish and i am learning MERN stack from PW Skills to enhance my coding skills and learn web developmemnt. hi learnining MERN lorem ipsum random text random texT rANDOM Text" ;



function count (str){

let words = str.split(" ");
let map = new Map();

for (let word of  words){


if (map.has(word)){
    map.set(word , map.get(word)+1);
}
else{
    map.set(word, 1);
}
}

return map
}

console.log(count(input));



