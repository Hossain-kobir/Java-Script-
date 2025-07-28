const myArray = [1,2,3,4,"Hossain"]

const myarray2 = new Array(1,2,3,4,5,"Kobir")

console.log(myarray2)

myArray.push(999)

myArray.unshift("unshift") //push value in array from 0 number index or easily understood leftside
console.log(myArray)

myArray.shift() // remove value in array from 0 number index
console.log("Here is the Orginal Array :",myArray)

const SlicingArray=myArray.slice(1,4)
// console.log(SlicingArray)

console.log("Main Array after sliceing Index 1-4 :",SlicingArray,"It is not includes range")
console.log("Orginal Array :",myArray)
const SplicingArray=myArray.splice(1,4)
console.log("Main Array after sliceing Index 1-4 :",SplicingArray,"It is includes range & Manipulate to the orginal array")
console.log("Orginal Array Manipulate After Splicing :",myArray)