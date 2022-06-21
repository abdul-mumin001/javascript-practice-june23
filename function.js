//Q.Find the factorial of a number

// function factorial(num){
  
    
//     if(num==0 || num==1){
//         return 1;
//     }else{
//         return num*factorial(num-1);
//     }
// }
// let num=5
// ans=factorial(num);
// console.log("The factorial of number " + num + " is " + ans)

//Q. write a program to print all the digits of a number

const number_of_digit=(num) => {
    let count=0;
    while(num!=0){
        num=parseInt(num/10)
        count++
    }
    return count;
}
console.log(number_of_digit(1234))
