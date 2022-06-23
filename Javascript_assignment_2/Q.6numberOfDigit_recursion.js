function number_of_digit(n,i){
    while(n!=0){
        i=i+1
        n=Math.floor(n/10)
        // console.log(n,"n")
        // console.log(i,"i")
        return number_of_digit(n,i)
    }
    console.log(i)
}
number_of_digit(1234,0)