function findDeletedNumber(arr,MixArr){
    if(arr.length===MixArr.length){
        return 0
    }else{
        let arrSum=arr.reduce((a,c)=>a+c,0)
        let mixSum=mixArr.reduce((a,c)=>a+c,0)
        return arrSum-mixSum
    }
}

/* In order to figure out the solution to this problem we did a few things. First we tested to see if any number was deleted from the mixed array by comparing them above.
If nothing was removed it simply returned 0. Then we had a new variable delcared called arrSum and we reduced it to add the integers. Then we delacred a second new array called mixSum
and we reduced that. Then we subtracted them and found the answer.*/