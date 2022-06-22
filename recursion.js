// function x(){
//     console.log("hello world")
//     return setTimeout(x,3000)
// }
// x()

// function x(num){
//     console.log("hello world")
//     if(num<10){
//         return x(num+1)
// }
//     }
// x(0)

// function x(num){
//     console.log("hello world"+num)
//     if(num<10){
//         return x(num+1)
// }
//     }
// x(0)

// let a=5
// let fact=1;
// for(let i=a; i>0;i--){
//     fact*=i

// }
// console.log(fact);


// Recursion program of material
function y(num,fact){
    // console.log(num)
    if(num>0){
        fact=fact*num
        return y(num-1,fact)

    }
    return fact
}
console.log(y(5,1))