function solve(array){
    return array.filter((array,i)=>array%i===0)
}



function bandNameGenerator(str){
    if(str.charAt(0)===str.charAt(str.length-1)){
        return str.charAt(0).toUpperCase() +str.slice(1)+str.slice(1)
    }
}

function 