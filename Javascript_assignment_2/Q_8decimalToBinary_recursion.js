const decimal_to_binary =(n) =>{
    if(n>=1){
        if(n%2){
            return decimal_to_binary((n-1)/2)+1;
        }else{
            return decimal_to_binary(n/2)+0;
        }
    }
    return "";
}
console.log(decimal_to_binary(2))