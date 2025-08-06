const user = {
    username:"Hossain_kobir",
    roll:"1011",

    welcomeMessage : function() {
        console.log(`Welcome ${this.username} to js world`);

        console.log(this)
    }
}
user.welcomeMessage()

user.username="kobir"
user.welcomeMessage()

console.log(this)

const checkThisKeyword = function () {
    console.log(this)
}

 checkThisKeyword();

const user_details =()=>{
    username= "Hossain_kobir"
    console.log(this.username)
}
user_details()

const sum= (num, num2) =>{   // Example of an explicit return is when a function uses the return keyword to send a value back to the caller
    return num+num2
}
console.log(sum(5,9))

const mul = (num,num2)=> (num*num2)  // example of An implicit return no need to use return keyword
console.log(mul(5,9))

const div = (num,num2)=> ({Number1: num,
                           Number2 : num2,
                           result : num/num2 }) // example of An implicit return no need to use return keyword
console.log(div(5,9))

