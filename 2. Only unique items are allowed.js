// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.


function unique(arr) {
    return new Set(arr);
  }
  
  let array = [1, 2, 3, 2, 4, 1,9,5,6,7,11,10,9];
  let uniqueSet = unique(array);
  
  console.log(uniqueSet);