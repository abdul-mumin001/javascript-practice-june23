//Q.Find the factorial of a number

function factorial(num){
  
    
    if(num==0 || num==1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}
let num=5
ans=factorial(num);
console.log("The factorial of number " + num + " is " + ans)