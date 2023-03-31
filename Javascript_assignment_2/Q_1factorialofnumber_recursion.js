// Q.Factorial of a number with Recursion 

// function y(num,fact){
//     // console.log(num)
//     if(num>0){
//         fact=fact*num
//         return y(num-1,fact)

//     }
//     return fact
// }
// console.log(y(5,1))



let a=parseInt(process.argv[2])
function reverse(a,b){

    while(a>=b){
        console.log(a)
        return reverse(a-1,b)
    }
}
reverse(a,1)
