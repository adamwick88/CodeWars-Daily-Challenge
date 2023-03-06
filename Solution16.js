function number(string){
    string.split(" ").map(word=> `${word} ${word.length}`)
}