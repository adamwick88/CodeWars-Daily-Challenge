/* Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. Solve for a 'of" loop */


const Vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text){
    let counter=0;

    for(let letter of text.toLowerCase()){
        if(Vowels.includes(letter)){
            counter++
        }
    }
    return counter
}

