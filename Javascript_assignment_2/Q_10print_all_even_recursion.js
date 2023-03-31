function even(a,b){
    while(b>=a){
        if(a%2==0){
            console.log(b)
            return even(a,b-1)
        }
        
    }
}
even(1,10)