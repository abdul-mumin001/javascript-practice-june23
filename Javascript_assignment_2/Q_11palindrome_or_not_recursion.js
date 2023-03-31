let num=parseInt(process.argv[2]);
let x;
function palindrome(num,x){

    if(num==0)
        return x;

    x=(x*10)+(num%10)
        return palindrome(Math.floor(num/10))
    
    
    
}
palindrome(num,0)
if(x==num){
    console.log("Palindrome")
}else{
    console.log("not a palindrome")
}