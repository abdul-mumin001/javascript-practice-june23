let a=parseInt(process.argv[2])
function reverse(a,b){

    while(a>=b){
        console.log(a)
        return reverse(a-1,b)
    }
}
reverse(a,1)