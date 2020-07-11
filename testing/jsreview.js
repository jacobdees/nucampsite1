
// do...while loop example
i = 0;
do {
    console.log("The iterator is", i);
    i++;
} while (i > 0 && i < 10);

// break while loop
i = 0;
let earlyEscapeNum = 6;
while(i<10){
    if(i===earlyEscapeNum){
        break;
    }
    console.log("The iterator is", i);
    i++;
}

// continue while loop
i=0;
let skipNum = 6;
while(i<10){
    // i++ has to be here or else it will continue past the incrementation and be stuck at 6
    i++;
    if(i===skipNum){
        continue;
    }
    console.log("The iterator is ",i);
}

// for loops
// for([initialization];[condition][final-expression]){
    // code to execute
// }
// always use 'let'
for (let i = 0; i < 10; i++){
    console.log("The iterator is",i);
}

// for loop with continue
let skipSecondNum = 5;
for (let i = 0; i < 10; i++){
    if (i === skipSecondNum){
        continue;
    }
    console.log("The iterator is", i);
}

// example of using a decrementor
for(let i = 10; i > 0; i--){
    console.log("The iterator is", i);
}

// to get the last value of the array
myArr=[4,5,6,7];
// returns 4
var length = myArr.length;
// returns myArr[4], which doesn't exist
var notLastItem = myArr[myArr.length];
// returns myArr[3], which is the last item in myArr
var lastItem = myArr[myArr.length-1];

// indexOf
var indexOfSeven = myArr.indexOf(7);
// if the request is not in myArr, return is -1 because that can't be an index (but 0 can)
var indexOfEight = myArr.indexOf(8);

// includes
// returns true or false if array includes request
var includesSeven = myArr.includes(7);

// concat
// returns a new array with request tacked onto the end
arr1 = [1,2,3];
arr2 = [4,5,6];
var arr3 = arr1.concat(arr2);
// arr1 and arr2 remain the same

// join
// can convert an array into a comma-separated string
let arr3ToString = arr3.join();
// add string in () to separate with something other than commas
let arr3ToStringWithSpaces = arr3.join(" ");


let myArr = ['a','b','c','d'];
// push
let myArrWithE = myArr.push('e');
// you can push multiple items
let myArrWithMore = myArr.push('f','g','h','i');

// pop
// removes the **last item** from myArr, but the variable attached to it is not a new array. It's the item you popped off
let myArrJustTheE = myArrWithE.pop();

// shift
// removes the **first item** in the array and saves it as a variable
// without the variable declaration, the item is removed, but not saved anywhere
let firstLetter = myArr.shift();

// unshift
// adds items to the beginning of the array
let newFirstItemsInArr = myArr.unshift('1','2','3');