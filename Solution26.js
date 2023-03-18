function addLength(str){
    return str.split(" ").map(word=> `${word} ${word.length} `)
}

function twoArrays(array, mixedArray){
    if(array.length===mixedArray.length){
        return true
    }else{
        let arrayAdded=array.reduce((a,c)=>a+c)
        let mixedArrayAdded=mixedArray.reduce((a,c)=>a+c)
        let finalNumber=arrayAdded-mixedArrayAdded
    }
    return finalNumber
}