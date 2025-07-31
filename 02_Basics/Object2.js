const smartApp = new Object()//A singleton object

// const smartApp = {} //literal object : a literal object, or object literal, is a way to create an object directly within the code, using a concise syntax

smartApp.name="Hossain"
smartApp.id="123aa"
smartApp.email="hossainkobir37bd@gmail.com"

console.log(smartApp.name);
console.log(smartApp)

const obj1 = {1:"ABC",2:"DEF"}
const obj2 = {3:"EFG",4:"HIJ"}

// const ob3 = {obj1,obj2} // Note : for Example in this tecnique showing Two separate Object
// console.log(ob3)

// const obj33 = Object.assign(obj1,obj2)
 const obj33 = Object.assign({},obj1,obj2) // {} this is the target {} here we can store all value & obj1, obj2 are the source
console.log(obj33)

// another popular way spread operator (...) to merge obj1,obj2 in obj4 of js 
const obj4 = {...obj1, ...obj2}
console.log(obj4)

const regularuser = {
    name :"Hossain",
    id : 1011,
    
    fullName : {

            userfullname :{
                firstName:"Hossain",
                lastName:"Kobir"
            }
    }
}

console.log(regularuser)
console.log(regularuser.fullName.userfullname.firstName)