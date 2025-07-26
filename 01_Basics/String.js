Name = "Hossain Kobir"
Id= 1011

console.log(`Here is Student Name ${Name} And Id ${Id}`)

const gamename = new String("Hossain")

console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.charAt(2))

console.log(gamename.split(" "))

console.log(gamename.toUpperCase())

const url = "www.hossain%20kobir.com"
console.log(url.replace("%20","-"))

const anotherstring="   Kobir siddique       "
console.log(anotherstring.trimStart())


console.log(anotherstring.substring(0,6))

console.log(anotherstring.slice(-17,-5))

const newstring= gamename.substring(0,4)
console.log(newstring)
const againstring = gamename.slice(-4,7) 

console.log(againstring)