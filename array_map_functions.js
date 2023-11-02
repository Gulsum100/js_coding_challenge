//write an array of random numbers and multiply them by 2 using an array map

// Generate an array of 5 random numbers between 1 and 10
//original and double each number
const OgArray = [5, 4, 6,  12, 7, 20];

let NewArray = OgArray.map(
    num => num * 2
)

console.log("OgArray:", OgArray);
console.log("NewArray:", NewArray);
