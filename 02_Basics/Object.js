
const sym = Symbol('@234#')

const Hossain = {
    name:"Hossain Kobir",
    Email:"hossainkobir37bd@gmail.com",
    sym:"Yes symbol",
    Address:"Dhaka",
    LastLoginDays:["Monday","Sataurdat","Wednesday"]
}

console.log(Hossain.name)
Hossain.name="kobir Hossain"
// Object.freeze(Hossain)
Hossain.name = "Hossain Kobir"
console.log(typeof Hossain[sym])

console.log(Hossain)