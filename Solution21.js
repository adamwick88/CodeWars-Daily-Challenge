function startingArray(array,mixedSum){
if(array.length===mixedSum.length){
return 'all good '
}else{
    let newSum=array.reduce((a,c)=>a+c,0)
    let mixedSumArray=mixedSum((a,c)=>a+c,0)
    let finalAnswer=newSum-mixedSumArray
}
return finalAnswer
}