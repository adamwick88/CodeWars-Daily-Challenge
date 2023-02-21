/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/


function solve(s) {
    let upper = 0, lower = 0, num = 0, special = 0;
    for (let char of s) {
        if (char >= 'A' && char <= 'Z') {
            upper++;
        } else if (char >= 'a' && char <= 'z') {
            lower++;
        } else if (char >= '0' && char <= '9') {
            num++;
        } else {
            special++;
        }
    }
    return [upper, lower, num, special];
}
