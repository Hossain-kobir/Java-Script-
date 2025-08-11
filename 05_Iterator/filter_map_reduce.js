const Number=[1,2,3,4,5,6,7,8,9]

// const newnum=Number.filter(function(num) { return num>5 })
// console.log(newnum)

// // const again = Number.filter((num)=>num>3)
// // console.log(again)

// const newnum2=[]

// Number.forEach((num)=>{
//     if (num>5){
//         newnum2.push(num)
//     }
// })

// console.log(newnum2)

// // using map

// const sum=Number.map((num)=>num+10)

// console.log(sum)
// is called chaining
const v = Number.map((num)=>num*10)
                .map((num)=>num+5)
                .filter((num) => num > 50)
        

console.log(v)