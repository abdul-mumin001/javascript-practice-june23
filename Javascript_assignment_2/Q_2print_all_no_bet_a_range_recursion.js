//Q.print all the no. bet the given range

function AllNo(a,b){

    while(a<=b){
        console.log(a)
        return AllNo(a+1,b)
        
    }
   
}
AllNo(1,10)