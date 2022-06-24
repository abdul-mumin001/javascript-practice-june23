// Q.Factorial of a number with Recursion 

function y(num,fact){
    // console.log(num)
    if(num>0){
        fact=fact*num
        return y(num-1,fact)

    }
    return fact
}
console.log(y(5,1))