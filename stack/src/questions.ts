import Stack from "./Stack";

// 1. Reverse a String Using Stack
// Input: "hello"
// Output: "olleh"

function reverseString(str:string):string{
    let reverseString = ""
    const charStack = new Stack();
    for(const char of str){
        charStack.push(char)
    }
    while(!charStack.isEmpty()){
        reverseString += charStack.pop()
    }
    return reverseString
}

console.log(reverseString("Hello"))