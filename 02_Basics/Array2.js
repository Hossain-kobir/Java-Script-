const furits= new Array("Mango","Apple","Orange")



const food = new Array ("Rice","Vegetables","Biriani")

// furits.push(food)

// console.log(furits)

// fol=furits.concat(food)
// console.log(fol)

const new_array = [...food,...furits]
console.log(new_array)

const athree = [1,2,3,[3,4,5,[4,5,6,[6,7,8]]]]
const anotherathree=athree.flat(Infinity)
console.log(anotherathree)

console.log(Array.isArray("Hossain"))
console.log(Array.from("Hossain"))
