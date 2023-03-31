function odd_no(n,i){
    while(n<=i){
        if(n%2!=0){
            console.log(n)
            
        }
        return odd_no(n+1,i)
    }
  

}
odd_no(1,10)
