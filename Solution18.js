function findWhatsMissing(arr,mixArr){
    if(arr.lenght===mixArr.length){
        return 0
    }else{
        let arrSum=arr.reduce((a,c)=>a+c,0)
        let mixSum=mixArr.reduce((a,c)=>a+c,0)
        return arrSum-mixSum
    }
}