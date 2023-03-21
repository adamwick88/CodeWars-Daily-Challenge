function returnEvenPalsOnly(array){
    return array.filter(n=>n%2===0).slice()
}

function letterHell(string){
    return string.split(" ").map(word=> `${word} ${word.length}`)
}

function palindrome(line){
    return String(line)==String(line).split("").reverse().join()
}

function (array){
    return array.filter(n=>array.lastIndexOf(n)===array.IndexOf(n))
}


function indexFriendsPals(array){
    return array.filter((num,i)=>num%i===0)
}

/* this takes the array and filters it, filtering out anyhting that doesen't equeal 0*/ 


function indexFriendsONly(array,number){
    return array.filter(n=>n%2===0).slice(-number)
}

