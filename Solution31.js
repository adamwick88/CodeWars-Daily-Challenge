function bandNameGenerator(str){
    if(str.chartAt(0)===str.charAt(str.length-1)){
        return str.charAt(0).toUpperCase()+str.slice(1);
    }else{
        return "The" + strCharAt(0).toUpperCase()+str.slice(1);
    }
}

function stringTransformer(str){
    let reversedStr=str.split('').reverse().join('')
    let transformedStr=reversedStr.split('').map(l=>l===l.toUpperCase()? l.toLowerCase(): l.toUpperCase())
        return transformedStr.join("")
}

function indexMultiple(array){
    return array.filter((array,index)=>array.length===index)
}


return array.filter(n=>n%2===0).slice(-number)


