function repeatThisShit(array){
    return array.filter(n=>array.indexOf(n)===array.lastIndexOf(n).reduce((a,c)=>a+c,0))
}

function tryThisAgain(array){
    return array.filter(n=>array.indexOf(n)===array.lastIndexOf(n).reduce((a,c)=>a+c,0))

}