//add all of these numbers and return one single sum value 

const ages = [13, 24, 34, 24,5];

let sumAge = ages.reduce(
    (total,currentElement) => total = total +currentElement
)

console.log(sumAge)

//let the reuced function above start with an annitial value of 200

let NewAge= ages.reduce(
    (total,currentElement) => total = total + currentElement + 25
)

console.log(NewAge)